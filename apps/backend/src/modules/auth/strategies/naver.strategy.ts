import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-oauth2";
import { firstValueFrom } from "rxjs";
import { Naver_CALLBACK_URL, NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } from "src/config/env.config";
import { UserService } from "src/modules/user/user.service";
import { UserRepository } from "src/repository/user.repository";
import { userProps } from "src/types/props";

@Injectable()
export class NaverStrategy extends PassportStrategy(Strategy, 'naver') {
    constructor(
        private readonly userService: UserService,
        private readonly httpService: HttpService
    ) {
        super({
            authorizationURL: 'https://nid.naver.com/oauth2.0/authorize',
            tokenURL: 'https://nid.naver.com/oauth2.0/token',
            clientID: NAVER_CLIENT_ID,
            clientSecret: NAVER_CLIENT_SECRET,
            callbackURL: Naver_CALLBACK_URL,
            scope: 'profile'
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: any, done: Function) {
        const userInfo = await this.getNaverUserInfo(accessToken);

        const email = userInfo.response.email;
        const name = userInfo.response.name;
        const picture = userInfo.response.profile_image;

        const user = await this.userService.joinOrAlready(email, name, picture);

        done(null, user);
    }

    async getNaverUserInfo(accessToken: string) {
        const url = 'https://openapi.naver.com/v1/nid/me';

        try {
            const response = await firstValueFrom(
                this.httpService.get(url, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                })
            );
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch user info from Naver');
        }
    }
}