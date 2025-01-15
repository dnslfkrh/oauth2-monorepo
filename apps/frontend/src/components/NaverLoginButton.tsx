export const NaverLoginButton = () => {
    const handleNaverLogin = () => {
        window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&state=random_state&redirect_uri=${process.env.NEXT_PUBLIC_Naver_CALLBACK_URL}`; 
    };
    
    return (
        <img
            src="/auth/NaverAuthButton.png"
            alt="Login with Naver"
            onClick={handleNaverLogin}
            className="login-button"
        />
    );
};