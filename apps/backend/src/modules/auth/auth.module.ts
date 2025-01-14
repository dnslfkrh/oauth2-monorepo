import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { GoogleStrategy } from './strategies/google.strategy';
import { AuthController } from './auth.controller';
import { UserRepository } from 'src/repository/user.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
    ],
    providers: [
        GoogleStrategy,
        UserRepository
    ],
    controllers: [
        AuthController
    ]
})

export class AuthModule { }