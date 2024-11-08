import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { snapshot: true });
  app.setGlobalPrefix('api');
  const config = new DocumentBuilder()
    .setTitle('Password_Manager')
    .setDescription('Document for API')
    .setVersion('1.0')
    .addTag('Password')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, documentFactory);
  const corsOption: CorsOptions = {
    origin: '*',
    methods: 'GET, POST, PATCH, PUT, DELETE, HEAD',
    credentials: true,
    allowedHeaders: 'Content-type, Authorization',
  };
  //Enable CORS with options
  app.enableCors(corsOption);
  await app.listen(process.env.PORT);
  console.log('App is running on port: ', await app.getUrl());
}
bootstrap();
