import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-github2";
import { GITHUB_CALLBACK_URL, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from "src/common/config/env.config";
import { UserService } from "src/modules/user/user.service";

@Injectable()
export class GitHubStrategy extends PassportStrategy(Strategy, "github") {
  constructor(
    private readonly userService: UserService
  ) {
    super({
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: GITHUB_CALLBACK_URL,
      scope: ["user:email"]
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: Function) {
    const email = profile.emails?.[0]?.value;
    const name = profile.displayName || profile.username;
    const picture = profile.photos?.[0]?.value || null;

    const user = await this.userService.joinOrAlready(email, name, picture);

    done(null, user);
  }
}