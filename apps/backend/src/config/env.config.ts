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
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_CALLBACK_URL,
    NAVER_CLIENT_ID,
    NAVER_CLIENT_SECRET,
    Naver_CALLBACK_URL,
    KAKAO_CLIENT_ID,
    KAKAO_CALLBACK_URL

} = process.env;