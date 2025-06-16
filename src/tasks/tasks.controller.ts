// Se importa el decorador llamado "Controller" desde el @nestjs/common
import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { TasksServices } from "./tasks.service";

// Si le defino la ruta '/tasks' dentro del controlador por ser una y por ser esta una clase hereda en todos los metodos http la definición de la ruta 
@Controller('/tasks')
// Se export la clase que vamos a utilizar
export class TaskController {

    // Se crea una variable donde sera guardado ese parametro
    taskService:TasksServices;

    // Para importar un servicio podemos crear en la clase el constructor de la clase que se ejecutara la intsante que se instancie la clase
    // le agregamos una variable que vamos a pasar el servicio
    constructor(tasksService:TasksServices) {
        this.taskService = tasksService;
    }

    // Para que pueda ser visitado se necesita crear un metodo http por el cual sea solicitado al back con el decorador @Get del metodo nestjs/common
    @Get() // Dentro del parentesis de define el nombre de la ruta de la petición '/tasks'

    // Se crea un metodo como en una clase que se ejecute cuando se solicite la peticion
    getTasks1() {
        // Retornamos desde el metodo la instancia de this de la clase que importamos el metodo que del nuevo servicio que vamos a retornar
        return this.taskService.getTasks();
    }

    // Para utilizar el metodo POST se importa el decorador @Post y se pasa la ruta de la petición
    @Post()

    createTask() {
        return 'Creando Tareas';
    }

    // Actualiza todo el objecto por ejemplo
    @Put()

    updateTask() {
        return 'Actualizando Tareas';
    }

    
    @Delete()

    deleteTask() {
        return 'Eliminando Tareas';
    }

    // Metodo para actualzar parcialmente , es decir solo cambia un valor del objecto
    @Patch()

    updateTaskStatus() {
        return 'Parchando Tareas';
    }


    // La idea es crear un controlador para cada logica, este ejemplo para gregar mas acceso a mas metodo dentro de la clase se crea 
    // otro get con otra ruta para que intercepte esa petición y devuelva el return de ese metodo especifico
}