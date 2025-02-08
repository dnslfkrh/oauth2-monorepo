export const GitHubLoginButton = () => {
  const handleGitHubLogin = () => {
      window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/github`;
  };

  return (
      <img
          src="/auth/GitHubLoginButton.png"
          alt="Login with GitHub"
          onClick={handleGitHubLogin}
          className="login-button"
      />
  );
};
