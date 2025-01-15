export const KakaoLoginButton = () => {
    const handleKakaoLogin = () => {
        window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/Kakao`;
    };

    return (
        <img
            src="/auth/KakaoLoginButton.png"
            alt="Login with Kakao"
            onClick={handleKakaoLogin}
            className="login-button"
        />
    );
};
