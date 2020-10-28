import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger("main");

  const app = await NestFactory.create(AppModule);

  const port = 3000;

  await app.listen(port);
  
  logger.log(`🚀 Application running on port ${port}`);
}
bootstrap();
