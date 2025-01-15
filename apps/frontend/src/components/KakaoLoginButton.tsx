export const KakaoLoginButton = () => {
    const handleKakaoLogin = () => {
        window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_CALLBACK_URL}`;
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
