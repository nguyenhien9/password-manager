import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  MaxLength,
  MinLength,
  Matches,
  Length,
} from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    description: "User's email, must be a valid email address.",
  })
  @IsEmail({}, { message: 'Email is invalid' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @ApiProperty({
    description: 'Username, should be between 8 to 20 characters.',
  })
  @IsNotEmpty({ message: 'Username is required' })
  @MinLength(8, { message: 'Username must be at least 8 characters' })
  @MaxLength(20, { message: 'Username can be up to 20 characters' })
  username: string;

  @ApiProperty({
    description:
      'Password, must start with an uppercase letter and include at least one special character.',
  })
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  @Matches(/^(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>/?~-])(?=.*[A-Z]).{8,}$/, {
    message:
      'Password must start with an uppercase letter and include at least one special character',
  })
  password: string;

  @ApiProperty({
    description: 'Repeat the password to confirm it matches.',
  })
  @IsNotEmpty({ message: 'Please confirm your password' })
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  confirm_password: string;

  @ApiProperty({ description: 'First name' })
  @IsNotEmpty({ message: 'First name is required' })
  first_name: string;

  @ApiProperty({ description: 'Last name' })
  @IsNotEmpty({ message: 'Last name is required' })
  last_name: string;

  @ApiProperty({ description: 'Phone number' })
  @Matches(/^[0-9]+$/, { message: 'Phone number must contain only numbers' })
  @Length(10)
  phone: string;
}

export class LoginDto {
  @ApiProperty({
    description: "User's email, must be a valid email address.",
  })
  @IsEmail({}, { message: 'Email is invalid' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;
  @ApiProperty({
    description: 'Password',
  })
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  @Matches(/^(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>/?~-])(?=.*[A-Z]).{8,}$/, {
    message:
      'Password must start with an uppercase letter and include at least one special character',
  })
  password: string;
}

export class RefreshTokenDto {
  @ApiProperty({
    description: 'The refresh token used to get a new access token.',
  })
  refreshToken: string;
}
