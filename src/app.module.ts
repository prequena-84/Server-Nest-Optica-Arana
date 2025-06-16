import { Module } from '@nestjs/common';

// Para conectar el nuevo modulo se debe importar 
import { TasksModule } from './tasks/tasks.module'
import { ModelsModule } from './models/models.module';
import { UsersModule } from './users/users.module'

@Module({
  // Esta clase se pasa a este import dentro del decorador "@module"
  imports: [TasksModule, ModelsModule,UsersModule],
})
export class AppModule {}

/**
 * Para crear modulos de manera automaticas se hace desde la terminar con el comando
 * 
 * nest generate --help podemos conseguir una guia para obtener los objectos que se pueden crear en el proyecto
 * 
 * con el comando nest g mo models es una abreviatura del comando que permite crear una base de un modulo.
 */