import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {

    // Para Simplicar en TypeScript el contructor le podemos crear en la clase un public o private en la declaracion de los parametros
    constructor( public usersService:UsersService ) {}

    @Get('/users')
    getUsers() {
        return this.usersService.getUsers();
    }

    @Post('/users')
    dataRecibed(
        @Body() body:any,
    ) {
        console.log('Datos del body:', body);

        return {
            message: 'Datos del usuario recibido',
            data: body,
        };
    }
}
