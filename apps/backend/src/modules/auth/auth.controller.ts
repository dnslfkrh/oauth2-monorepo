import { Controller, Get, Query, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request, Response } from "express";
import { FRONTEND_URL } from "src/common/config/env.config";
import { UserProps } from "src/common/types/props";
import { AuthService } from "./auth.service";
import { User } from "src/entity/user.entity";
import { resCookie } from "src/common/utils/resCookie";

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    /* Google */
    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    async googleAuthRedirect(@Req() req: Request & { user: UserProps }, @Res() res: Response) {
        this.authService.setJwtTokens(req.user, res);
        res.redirect(`${FRONTEND_URL}`);
    }

    @Get('google')
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req: Request) { }

    /* Naver */
    @Get('naver/callback')
    @UseGuards(AuthGuard('naver'))
    async naverAuthCallback(@Query('code') code: string, @Req() req: Request & { user: UserProps }, @Res() res: Response) {
        this.authService.setJwtTokens(req.user, res);
        res.redirect(`${FRONTEND_URL}`);
    }

    /* Kakao */
    @Get('kakao/callback')
    @UseGuards(AuthGuard('kakao'))
    async kakaoAuthCallback(@Req() req: Request & { user: UserProps }, @Res() res: Response) {
        this.authService.setJwtTokens(req.user, res);
        res.redirect(`${FRONTEND_URL}`);
    }
}