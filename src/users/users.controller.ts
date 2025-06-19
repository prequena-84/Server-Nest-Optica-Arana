import { Controller, Get, Post, Body, Delete, Param, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import type { IUser } from 'src/interfaces/users/IUser';
import type { IResponseUser } from 'src/interfaces/response/IResponseUser';

@Controller('/users')
export class UsersController {
    constructor( public usersService:UsersService ) {}
    
    @Get()
    async getUsers(): Promise<IResponseUser> {

        const response = await this.usersService.getUsers()
        return {
            data:response.data,
            message: response.message,
        };
    };

    @Post()
    async addUser( 
        @Body() body:IUser 
    ): Promise<IResponseUser> {

        const response = await this.usersService.addUser(body) as IResponseUser;
        return {
            data: response.data,
            message: response.message,
        };
    };

    @Delete(':id')
    async deleteIdUser( 
        @Param('id') id:number 
    ): Promise<IResponseUser> {

        const response = await this.usersService.deleteUser(id);
        return {
            data: response.data,
            message: response.message,
        };
    };

    @Patch(':id')
    async setIdUser( 
        @Param('id') id:number, 
        @Body() body:IUser 
    ): Promise<IResponseUser> {

        const response = await this.usersService.setUserId(id,body);
        return {
            data: response.data,
            message: response.message,
        };
    };
};
