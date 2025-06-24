import { Module } from '@nestjs/common';

// Para conectar el nuevo modulo se debe importar 
import { ConexionDB } from './config/connection/conexionDB.module';

// Importación de los Modulos que se van a conectar a esta colección
import { UsersModule } from './modules/users/users.module';
import { AppController } from './app.controller';
import { CostumerModule } from './modules/costumer/costumer.module';
import { DiagnoseModule } from './modules/diagnose/diagnose.module';
import { DiagnoseReportModule } from './report/diagnose-report/diagnose-report.module';
import { CostumerReportModule } from './report/costumer-report/costumer-report.module';

@Module({
  // Esta clase se pasa a este import dentro del decorador "@module"
  imports: [ ConexionDB, UsersModule, CostumerModule, DiagnoseModule, DiagnoseReportModule, CostumerReportModule ],
  controllers: [AppController],
})
export class AppModule {}

// quede en crear el module de reportes de los datos del cliente, usuario & su diagnostico, y revisar porque me tomo otra nacionalidad diferente en la lista de la base de datos a pesar de estar tipada correctamente de la interface.