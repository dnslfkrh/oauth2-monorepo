"use client";

import { GoogleLoginButton } from "@/components/GoogleLoginButton";
import { KakaoLoginButton } from "@/components/KakaoLoginButton";
import { NaverLoginButton } from "@/components/NaverLoginButton";

const LoginPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="flex flex-row items-center space-x-6 p-8 bg-white shadow-xl rounded-xl">
                <GoogleLoginButton />
                <NaverLoginButton />
                <KakaoLoginButton />
            </div>
        </div>
    );
};

export default LoginPage;