"use client";

import { GoogleLoginButton } from "@/features/auth/google/components/GoogleLoginButton";
import { useGoogleAuth } from "@/features/auth/google/hooks/useGoogleAuth";

const LoginPage = () => {
    useGoogleAuth();

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="flex flex-row items-center space-x-8 p-10 bg-white shadow-xl rounded-xl">
                <GoogleLoginButton />
                <GoogleLoginButton />
                <GoogleLoginButton />
            </div>
        </div>
    );
}

export default LoginPage;
