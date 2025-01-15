import { Controller, Get, Query, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request, Response } from "express";
import { FRONTEND_URL } from "src/config/env.config";
import { userProps } from "src/types/props";

@Controller('auth')
export class AuthController {
    constructor() { }

    /* Google */
    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    async googleAuthRedirect(@Req() req: Request & { user: userProps }, @Res() res: Response) {
        res.redirect(`${FRONTEND_URL}`);
    }

    @Get('google')
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req: Request) { }

    /* Naver */
    @Get('naver/callback')
    @UseGuards(AuthGuard('naver'))
    async naverAuthCallback(@Query('code') code: string, @Req() req: Request & { user: userProps }, @Res() res: Response) {
        res.redirect(`${FRONTEND_URL}`);
    }

    /* Kakao */
    @Get('kakao/callback')
    @UseGuards(AuthGuard('kakao'))
    async kakaoAuthCallback(@Req() req: Request & { user: userProps }, @Res() res: Response) {
        res.redirect(`${FRONTEND_URL}`);
    }
}