# OAuth 2.0를 활용한 소셜 로그인 구현 프로젝트
OAuth 2.0을 사용하여 소셜 로그인 기능을 구현한 모노레포 프로젝트입니다.

## 기능 구현

- OAuth 2.0 로그인

- JWT 토큰 발급, Refresh

- 유저 정보 저장

## 사용된 기술

### Frontend

- Next.js

### Backend

- Nest.js, Passport, JWT

### Database

- MySQL

### OAuth 2.0

- Google, Naver, Kakao

## 프로젝트 실행

`.env` 설정

```
cd apps/backend
npm install
npm run start:dev
```

```
cd apps/frontend
npm install
npm run dev
```

`go` http://localhost:3000/auth