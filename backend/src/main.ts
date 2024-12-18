import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthGuard } from './modules/auth/guard/auth.guard'; // Ruta del AuthGuard
import { JwtService } from '@nestjs/jwt'; // Necesario para inyectar en el guard

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de CORS
  app.enableCors({
    origin: 'http://localhost:4200', // Dominio de Angular
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Configuración del AuthGuard global
  const jwtService = app.get(JwtService);
  //app.useGlobalGuards(new AuthGuard(jwtService));

  // Puerto de escucha
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
