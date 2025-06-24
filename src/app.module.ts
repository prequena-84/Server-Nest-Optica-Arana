import { Module } from '@nestjs/common';

// Para conectar el nuevo modulo se debe importar 
import { ConexionDB } from './config/connection/conexionDB.module';

// Importación de los Modulos que se van a conectar a esta colección
import { UsersModule } from 'src/users/users.module';
import { AppController } from './app.controller';
import { CostumerModule } from './costumer/costumer.module';
import { DiagnoseModule } from './diagnose/diagnose.module';

@Module({
  // Esta clase se pasa a este import dentro del decorador "@module"
  imports: [ ConexionDB, UsersModule, CostumerModule, DiagnoseModule ],
  controllers: [AppController],
})
export class AppModule {}

// quede en crear el module de reportes de los datos del cliente, usuario & su diagnostico, y revisar porque me tomo otra nacionalidad diferente en la lista de la base de datos a pesar de estar tipada correctamente de la interface.