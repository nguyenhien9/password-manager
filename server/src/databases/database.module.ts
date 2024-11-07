import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from 'src/models/role.model';
import { User } from 'src/models/user.model';
import { RoleSeeder } from './seeders/role.seed';
import { Sequelize } from 'sequelize-typescript';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      port: +process.env.DB_PORT || 3306,
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([User, Role]),
  ],
  providers: [RoleSeeder],
})
export class DatabaseModule implements OnModuleInit {
  constructor(
    private sequelize: Sequelize,
    private roleSeeder: RoleSeeder,
  ) {}
  async onModuleInit() {
    await this.sequelize.sync({ alter: false });
    await this.roleSeeder.run();
  }
}
