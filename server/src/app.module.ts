import { Module } from '@nestjs/common';
import { DatabaseModule } from './databases/database.module';
import { AuthModule } from './modules/auth.module';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { UserModule } from './modules/user.module';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    UserModule,
    DevtoolsModule.register({ http: process.env.NODE_ENV !== 'producttion' }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
