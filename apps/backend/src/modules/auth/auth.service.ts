import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Response } from "express";
import { ACCESS_TOKEN_EXPIRATION, ACCESS_TOKEN_SECRET, REFRESH_TOKEN_EXPIRATION, REFRESH_TOKEN_SECRET } from "src/common/config/env.config";
import { Payload } from "src/common/types/payload";
import { UserProps } from "src/common/types/props";
import { resCookie } from "src/common/utils/resCookie";

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService
    ) { }

    private createAccessToken(payload: Payload) {
        return this.jwtService.sign(payload, {
            secret: ACCESS_TOKEN_SECRET,
            expiresIn: ACCESS_TOKEN_EXPIRATION
        });
    }

    private createRefreshToken(payload: Payload) {
        return this.jwtService.sign(payload, {
            secret: REFRESH_TOKEN_SECRET,
            expiresIn: REFRESH_TOKEN_EXPIRATION
        });
    }

    setJwtTokens(user: UserProps, res: Response) {
        const payload = {
            email: user.email,
            name: user.name,
        };

        const accessToken = this.createAccessToken(payload);
        const refreshToken = this.createRefreshToken(payload);

        resCookie(res, 'accessToken', accessToken);
        resCookie(res, 'refreshToken', refreshToken);
    }
}