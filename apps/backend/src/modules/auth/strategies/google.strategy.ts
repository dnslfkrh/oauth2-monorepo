import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-google-oauth20";
import { UserRepository } from "src/repository/user.repository";
import { UserDto } from "../dto/user.dto";
import { GOOGLE_CALLBACK_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "src/configs/env.config";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, "google") {
    constructor(
        private readonly userRepository: UserRepository
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
        const name = email.split("@")[0];
        const picture = profile.photos[0].value;

        let user = await this.userRepository.findUserByEmail(email);

        if (!user) {
            const newUser: UserDto = { email, name, picture };
            user = await this.userRepository.createUser(newUser);
        }

        console.log(user);
        done(null, user);
    }
}