// Importación del Middleware
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { JwtMiddleware } from './common/middleware/jwt.middleware';

// Para conectar el nuevo modulo se debe importar 
import { ConexionDB } from './config/connection/conexionDB.module';

// Importación de los Modulos que se van a conectar a esta colección
import { UsersModule } from './modules/users/users.module';
import { CostumerModule } from './modules/costumer/costumer.module';
import { DiagnoseModule } from './modules/diagnose/diagnose.module';
import { DiagnoseReportModule } from './report/diagnose-report/diagnose-report.module';
import { CostumerReportModule } from './report/costumer-report/costumer-report.module';
import { AuthModule } from './modules/auth/auth.module';

// Importacion del controlador Principal App_Module
import { AppController } from './app.controller';

@Module({
  imports: [ 
    ConexionDB, 
    UsersModule, 
    CostumerModule, 
    DiagnoseModule, 
    DiagnoseReportModule, 
    CostumerReportModule, 
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  // Para activar el middleware en Nest
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(JwtMiddleware)
    .forRoutes(
      { path: 'costumer', method: RequestMethod.ALL },
      { path: 'diagnose', method: RequestMethod.POST },
    );
  };
};

// Quede en revisar porque me tomo otra nacionalidad diferente en la lista de la base de datos a pesar de estar tipada correctamente de la interface.
// Quede en revisar cuales eran las rutas protegidas y cuales no.