import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { GoogleStrategy } from './strategies/google.strategy';
import { AuthController } from './auth.controller';
import { UserRepository } from 'src/repository/user.repository';
import { NaverStrategy } from './strategies/naver.strategy';
import { HttpModule } from '@nestjs/axios';
import { UserService } from '../user/user.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        HttpModule
    ],
    providers: [
        UserService,
        UserRepository,
        GoogleStrategy,
        NaverStrategy,
    ],
    controllers: [
        AuthController
    ]
})

export class AuthModule { }