import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(cookieParser())
    app.useGlobalPipes(new ValidationPipe());
    const config = app.get<ConfigService>(ConfigService);

    await app.listen(config.get<number>('PORT'));
}
bootstrap();
