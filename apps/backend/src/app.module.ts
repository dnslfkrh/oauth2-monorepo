import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mysqlConfig } from './common/config/mysql.config';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(mysqlConfig), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
