import { Module } from '@nestjs/common';

// Para conectar el nuevo modulo se debe importar 
import { ConexionDB } from './config/connection/conexionDB.module';

// Importación de los Modulos que se van a conectar a esta colección
import { UsersModule } from 'src/users/users.module';
import { AppController } from './app.controller';
import { CostumerModule } from './costumer/costumer.module';

@Module({
  // Esta clase se pasa a este import dentro del decorador "@module"
  imports: [ ConexionDB, UsersModule, CostumerModule ],
  controllers: [AppController],
})
export class AppModule {}