import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { REFRESH_TOKEN_SECRET } from "src/common/config/env.config";
import { Payload } from "src/common/types/payload";

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(Strategy, "refreshToken") {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (req) => req.cookies['refreshToken'],
            ]),
            secretOrKey: REFRESH_TOKEN_SECRET,
            passReqToCallback: true
        });
    }

    async validate(req: Request, payload: Payload) {
        const refreshToken = req.cookies['refreshToken'];
        if (!refreshToken) {
            throw new Error('Refresh token not found');
        }
        return {
            ...payload,
            refreshToken
        };
    }
}