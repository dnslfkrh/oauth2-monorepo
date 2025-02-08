import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { GoogleStrategy } from './strategies/oauth/google.strategy';
import { AuthController } from './auth.controller';
import { UserRepository } from 'src/repository/user.repository';
import { NaverStrategy } from './strategies/oauth/naver.strategy';
import { HttpModule } from '@nestjs/axios';
import { UserService } from '../user/user.service';
import { KakaoStrategy } from './strategies/oauth/kakao.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ACCESS_TOKEN_EXPIRATION, ACCESS_TOKEN_SECRET } from 'src/common/config/env.config';
import { AccessTokenStrategy } from './strategies/jwt/accessToken.strategy';
import { RefreshTokenStrategy } from './strategies/jwt/refreshToken.strategy';
import { AuthService } from './auth.service';
import { GitHubStrategy } from './strategies/oauth/github.strategy';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            secret: ACCESS_TOKEN_SECRET,
            signOptions: { expiresIn: ACCESS_TOKEN_EXPIRATION }
        }),
        HttpModule
    ],
    providers: [
        AuthService,
        UserService,
        UserRepository,
        AccessTokenStrategy,
        RefreshTokenStrategy,
        GoogleStrategy,
        NaverStrategy,
        KakaoStrategy,
        GitHubStrategy
    ],
    controllers: [
        AuthController
    ]
})

export class AuthModule { }