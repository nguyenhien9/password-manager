import { Module } from '@nestjs/common';
import { DatabaseModule } from './databases/database.module';
import { AuthModule } from './modules/auth.module';
import { UserModule } from './modules/user.module';

@Module({
  imports: [DatabaseModule, AuthModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
