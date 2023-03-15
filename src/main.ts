import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // app.useGlobalPipes(new ValidationPipe());esto sirve para instalar los DTO.Para forzar la salida de datos.
  await app.listen(3001);
}
bootstrap();
