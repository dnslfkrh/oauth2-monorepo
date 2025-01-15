import { Controller, Get, HttpException, HttpStatus, Query, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request, Response } from "express";
import { FRONTEND_URL } from "src/common/config/env.config";
import { UserProps } from "src/common/types/props";
import { AuthService } from "./auth.service";
import { RefreshTokenGuard } from "./guards/refresh.guard";
import { resCookie } from "src/common/utils/resCookie";

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    /* Refresh Access Token */
    @Get('token')
    @UseGuards(RefreshTokenGuard)
    async refreshAccessToken(@Req() req: Request, @Res() res: Response) {
        const user = req.user as UserProps;
        if (!user) {
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        }
        const newAccessToken = this.authService.createAccessToken(user);
        resCookie(res, 'accessToken', newAccessToken);
    }

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