import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FRONTEND_URL, PORT } from './config/env.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: FRONTEND_URL,
    credentials: true,
  });

  await app.listen(`${PORT}`);
}
bootstrap();
