import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// Function to build the application
async function bootstrap() {

  // Function to create the nest application object
  const app = await NestFactory.create(AppModule);

  // Enables cors which is a cross site tracking enablement service
  app.enableCors();

  // Adds validation pipe which validates dto objects before allowing them to be routed
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));

  // Call to specify the port that the api will run on
  await app.listen(5000);
}

// Function to run the application
bootstrap();
