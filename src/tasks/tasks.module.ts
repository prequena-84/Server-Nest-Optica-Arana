// Para indicar al Node que es un modulo de Nest se debe importar el DECORADOR "Module" desde el @nestjs/common
import { Module } from "@nestjs/common";

// Se importa el controller que le corresponde, es decir, el que esta dentro del mismo modulo
// Un modulo puede contener varios controladores
import { TaskController } from './tasks.controller'
import { TasksServices } from "./tasks.service";

// Se utiliza por encima de la class o function que se va exportar con la siguiente sintaxis
@Module({
    // Se agrega la opcion controller y se pasa el controller importado
    controllers: [TaskController,],
    // con el uso de Provider es otro arreglo que le vamos a importar esos servicios que vamos a reutilizar en los distintos modulos
    providers: [TasksServices],
})

// Para crear una logica se debe crear un archivo controller que contiene una clase con la logica
export class TasksModule {}