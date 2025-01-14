import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request, Response } from "express";
import { FRONTEND_URL } from "src/configs/env.config";
import { userProps } from "src/types/props";

@Controller('auth')
export class AuthController {
    constructor() { }

    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    async googleAuthRedirect(@Req() req: Request & { user: userProps }, @Res() res: Response) {
        res.redirect(`${FRONTEND_URL}`);
    }

    @Get('google')
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req: Request) { }
}