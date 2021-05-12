import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  
  const swaggerOptions = new DocumentBuilder()
    .setTitle("Supplies Office Api")
    .setDescription("Official Docs for Supplies Office API")
    .setVersion("1.0")
    .build()

  const apiDocuments = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup("swagger", app, apiDocuments);
  // http://localhost:3000/api/


  await app.listen(3000);
}
bootstrap();
