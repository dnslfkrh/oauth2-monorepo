import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-google-oauth20";
import { UserRepository } from "src/repository/user.repository";
import { GOOGLE_CALLBACK_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "src/configs/env.config";
import { userProps } from "src/types/props";
import { UserService } from "src/modules/user/user.service";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, "google") {
    constructor(
        private readonly userService: UserService
    ) {
        super({
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: GOOGLE_CALLBACK_URL,
            scope: ['email', 'profile']
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: any, done: Function) {
        const email = profile.emails[0].value;
        const name = profile.displayName;
        const picture = profile.photos[0].value;

        const user = await this.userService.joinOrAlready(email, name, picture);

        done(null, user);
    }
}