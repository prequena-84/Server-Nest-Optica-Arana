import { Controller, Get, Post, Body, Delete, Param, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import type { IUser } from 'src/interfaces/users/user.interface';
import type { TIdUser } from 'src/types/users/users.type';
import type { IResponseUser } from 'src/interfaces/response/response-user.interface';

@Controller('API/V1/users')
export class UsersController {
    constructor( public usersService:UsersService ) {}

    @Get('/')
    getWelcome() {
        return "Bienvenido al Servicio de CRUD de Usuarios";
    };
    
    @Get('get')
    async getUsers(): Promise<IResponseUser> {
        const response = await this.usersService.getUsers();
        return {
            data:response.data,
            message: response.message,
        };
    };

    @Post('add')
    async addUser( @Body() body:IUser ): Promise<IResponseUser> {
        const response = await this.usersService.addUser(body);
        return {
            data: response.data,
            message: response.message,
        };
    };

    @Delete(':id')
    async deleteIdUser( @Param('id') id:TIdUser ): Promise<IResponseUser> {

        const response = await this.usersService.deleteUser(id);
        return {
            data: response.data,
            message: response.message,
        };
    };

    @Patch(':id')
    async setIdUser( @Param('id') id:TIdUser, @Body() body:IUser ): Promise<IResponseUser> {
        const response = await this.usersService.setUserId(id,body);
        return {
            data: response.data,
            message: response.message,
        };
    };
};
