import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-kakao";
import { KAKAO_CALLBACK_URL, KAKAO_CLIENT_ID } from "src/common/config/env.config";
import { UserService } from "src/modules/user/user.service";

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
    constructor(
        private readonly userService: UserService
    ) {
        super({
            clientID: KAKAO_CLIENT_ID,
            clientSecret: '',
            callbackURL: KAKAO_CALLBACK_URL,
            scope: ['profile', 'account_email']
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile, done: Function) {
        const email = profile._json.kakao_account.email;
        const name = profile.displayName;
        const picture = profile._json.properties.profile_image;

        const user = await this.userService.joinOrAlready(email, name, picture);

        done(null, user);
    }
}
