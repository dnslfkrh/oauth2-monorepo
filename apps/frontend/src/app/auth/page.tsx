"use client";

import { GoogleLoginButton } from "@/components/GoogleLoginButton";
import { NaverLoginButton } from "@/components/NaverLoginButton";

const LoginPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="flex flex-row items-center space-x-8 p-10 bg-white shadow-xl rounded-xl">
                <GoogleLoginButton />
                <NaverLoginButton />
            </div>
        </div>
    );
}

export default LoginPage;