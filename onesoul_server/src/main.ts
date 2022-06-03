import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //body에서 엔티티에없는 파라미터를 아예 안받음
      forbidNonWhitelisted: true, //whitelist에서 걸리는 애가 있으면 아예 400 에러 띄우고 안넘어감
      transform: true,
    }),
  );
  await app.listen(3001);
}

//메인에서 시작해서 -> 모듈 -> 서비스 -> 컨트롤러

bootstrap();
