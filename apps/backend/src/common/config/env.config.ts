import * as dotenv from "dotenv";

dotenv.config();

export const {
    PORT,
    FRONTEND_URL,
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
    ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET,
    ACCESS_TOKEN_EXPIRATION,
    REFRESH_TOKEN_EXPIRATION,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_CALLBACK_URL,
    NAVER_CLIENT_ID,
    NAVER_CLIENT_SECRET,
    NAVER_CALLBACK_URL,
    KAKAO_CLIENT_ID,
    KAKAO_CALLBACK_URL,
    GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET,
    GITHUB_CALLBACK_URL,

} = process.env;