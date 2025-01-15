import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ACCESS_TOKEN_SECRET } from "src/common/config/env.config";
import { Payload } from "src/common/types/payload";

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, "accessToken") {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (req) => req.cookies['accessToken'],
            ]),
            secretOrKey: ACCESS_TOKEN_SECRET
        });
    }

    async validate(payload: Payload) {
        return {
            email: payload.email,
            name: payload.name,
        };
    }
}