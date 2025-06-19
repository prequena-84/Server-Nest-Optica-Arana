import { Module } from '@nestjs/common';

// Para conectar el nuevo modulo se debe importar 
import { ConexionDB } from './config/connection/conexionDB.module';

// Importación de los Modulos que se van a conectar a esta colección
import { UsersModule } from 'src/users/users.module';
import { AppController } from './app.controller';

@Module({
  // Esta clase se pasa a este import dentro del decorador "@module"
  imports: [ ConexionDB, UsersModule ],
  controllers: [AppController],
})
export class AppModule {}

/**
 * Para crear modulos de manera automaticas se hace desde la terminar con el comando
 * 
 * nest generate --help podemos conseguir una guia para obtener los objectos que se pueden crear en el proyecto
 * 
 * con el comando nest g mo models es una abreviatura del comando que permite crear una base de un modulo.
 */