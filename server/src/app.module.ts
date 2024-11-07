import { Module } from '@nestjs/common';
import { DatabaseModule } from './databases/database.module';
import { AuthModule } from './modules/auth.module';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
