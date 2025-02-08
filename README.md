# OAuth 2.0를 활용한 소셜 로그인 구현 프로젝트
OAuth 2.0을 사용하여 소셜 로그인 기능을 구현한 모노레포 프로젝트입니다.

## 기능 구현

- OAuth 2.0 로그인

- JWT 토큰 발급, Refresh

- 유저 정보 저장

## 사용된 기술

### OAuth 2.0

<img src="https://github.com/user-attachments/assets/b573be32-d40b-4e1c-baab-44666974eaa6" width="25" height="auto" style="margin-right: 2px">
<img src="https://github.com/user-attachments/assets/84534172-1662-47a2-aa11-f2fa984ae9eb" width="25" height="auto" style="margin-right: 2px">
<img src="https://github.com/user-attachments/assets/ef021d83-a715-434a-96e0-b78024390e87" width="25" height="auto" style="margin-right: 2px">
<img src="https://github.com/user-attachments/assets/77ec4886-8249-4926-95af-bcb604e32649" width="25" height="auth">

### Frontend

- Next.js

### Backend

- Nest.js, Passport, JWT

### Database

- MySQL


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
