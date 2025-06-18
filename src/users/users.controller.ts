import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import type { IUser } from 'src/interfaces/users/IUser';
import type { IResponseUser } from 'src/interfaces/response/IResponse';


@Controller('/users')
export class UsersController {

    // Para Simplicar en TypeScript el contructor le podemos crear en la clase un public o private en la declaracion de los parametros
    constructor( public usersService:UsersService ) {}

    /*@Get('/')
    moduleInicio(): string {
        return 'Bienvenido al modulo de usuarios'
    };*/

    @Get()
    getUsers() {
        return this.usersService.getUsers();
    };

    @Post()
    async addUser( @Body() body:IUser ): Promise<IResponseUser> {

        const response = await this.usersService.addUser(body) as IResponseUser;

        return {
            data: response.data,
            message: response.message,
        };
    };

    //@Delete('/:id')
    // Quede en crear la petición que elimina y luego la petición que actualiza

    
}
