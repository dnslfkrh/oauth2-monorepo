export const GoogleLoginButton = () => {
    const handleGoogleLogin = () => {
        window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`;
    };

    return (
        <img
            src="/auth/GoogleLoginButton.png"
            alt="Login with Google"
            onClick={handleGoogleLogin}
            className="login-button"
        />
    );
};
