import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModelsUsers, IUserModel } from './schemas/user.schema';

import type { TIdUser } from 'src/types/users/TUsers';
import type { IUser } from 'src/interfaces/users/IUser';
import type { IResponseUser } from 'src/interfaces/response/IResponse';

@Injectable()
export class UsersService {

    constructor( 
        @InjectModel(ModelsUsers.name) 
        private readonly userModel: IUserModel
    ) {};

    async getUsers(): Promise<IResponseUser> {
        try {

            return {
                data: await this.userModel.allUser(),
                message:'Se realizo la consulta correctamente',
            };
        } catch(err) {

            console.error('ocurrio el siguiente error', err);
            return {
                data:null,
                message: `Ocurrio el siguiente error en la consulta: ${err}`,
            };
        };
    };

    async setUserId(id:TIdUser, data:IUser): Promise<IResponseUser> {
        try {

            const response = await this.userModel.updateIdUser(id,data);
            return {
                data:response.data,
                message:response.message,
            };
        } catch(err) {

            console.error('ocurrio el siguiente error', err);
            return {
                data: null,
                message:`Hubo un Error en la actualización del cliente: ${err}`,
            };
        };
    };

    async deleteUser(id:TIdUser): Promise<IResponseUser> {
        try {

            const response = await this.userModel.deleteOne({ idUser:id });
            return {
                data:null,
                message:response.acknowledged ? `Eliminación correcta, Documentos afectados ${response.deletedCount}` : `Eliminación incorrecta, Documentos afectados ${response.deletedCount}`,
            };
        } catch(err) {

            console.error('ocurrio el siguiente error', err);
            return {
                data:null,
                message:`Se genero el siguiente error: ${err}`,
            };
        };
    };

    async addUser(data:IUser): Promise<IResponseUser> {
        try {
            const response = await this.userModel.createInstance(data);
            return {
                data:response.data,
                message: response.message,
            };

        } catch(err) {

            console.error('ocurrio el siguiente error', err);
            return {
                data:null,
                message:`Ocurrio el siguiente error en el registro: ${err}`,
            };
        };
    };
};