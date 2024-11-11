import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { LoginDto, RegisterDto } from 'src/dto/auth.dto';
import { User } from 'src/models/user.model';
import * as bcrypt from 'bcrypt';
import { RoleEnum } from 'src/enums/RoleEnum';
import * as crypto from 'crypto';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto): Promise<User> {
    const existingUser = await this.userModel.findOne({
      where: { email: registerDto.email },
    });
    if (existingUser) {
      throw new ConflictException('User exists!');
    }

    const {
      email,
      password,
      confirm_password,

      first_name,
      last_name,
      phone,
    } = registerDto;
    if (password !== confirm_password) {
      throw new ConflictException('Password is not matched');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await this.userModel.create({
      role_id: RoleEnum.User,
      email: email,
      password_hash: hashedPassword,
      first_name: first_name,
      last_name: last_name,
      phone: phone,
    });
    return newUser;
  }

  async login(
    loginDto: LoginDto,
  ): Promise<{ access_token: string; refresh_token: string }> {
    const { email, password } = loginDto;
    const user = await this.userModel.findOne({
      where: { email },
    });
    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
      throw new UnauthorizedException('Email or password is not correct!');
    }

    const payload = { id: user.id, role_id: user.role_id };
    const access_token = this.jwtService.sign(payload);

    //refreshtoken
    const refresh_token = crypto.randomBytes(32).toString('hex');
    await user.update({ refresh_token: refresh_token });

    return { access_token, refresh_token };
  }

  // refresh access token
  async refreshToken(
    refresh_token: string,
  ): Promise<{ access_token: string; refresh_token: string }> {
    const user = await this.userModel.findOne({
      where: { refresh_token: refresh_token },
    });
    if (!user) {
      throw new UnauthorizedException('Invalid refresh token');
    }
    // Tạo lại access token và refresh token mới
    const payload = { id: user.id, role_id: user.role_id };
    const access_token = this.jwtService.sign(payload);
    const new_refresh_token = crypto.randomBytes(32).toString('hex');

    //update user
    await user.update({ refresh_token: new_refresh_token });
    return { access_token, refresh_token: new_refresh_token };
  }
}
