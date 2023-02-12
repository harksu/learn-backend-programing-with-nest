import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidUnknownValues: true, //규칙이 정해져있지 않은 스키마에 따른 통과 여부
    }),
  );
  await app.listen(3000);
}
bootstrap();
