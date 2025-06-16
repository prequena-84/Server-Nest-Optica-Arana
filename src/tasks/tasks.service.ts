// Para crear un servicio se importa el decorador injectbale desde el @nestjs/common
import { Injectable } from "@nestjs/common";

// Sa agrega la decoracion para indicar que es un servicio la clase que vamos a exportar del componente
@Injectable()
export class TasksServices {

    // aqui agregamos la logica que sera utilizada desde otro componente
    getTasks() {
        return [ 'Tasks 1','Tasks 2','Tasks 3' ]
    }
}