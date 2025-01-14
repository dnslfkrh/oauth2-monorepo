import Image from 'next/image';

export const GoogleLoginButton = () => {
    const handleGoogleLogin = () => {
        window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`;
    };

    return (
        <Image
            src="/auth/GoogleAuthButton.png"
            alt="Login with Google"
            onClick={handleGoogleLogin}
            width={82}
            height={82}
            className="cursor-pointer"
        />
    );
};