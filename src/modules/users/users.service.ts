import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModelsUsers, IUserModel } from './schemas/user.schema';

import type { TIdUser } from 'src/types/users/users.type';
import type { IUser } from 'src/interfaces/users/user.interface';
import type { IResponseUser } from 'src/interfaces/response/response-user.interface';

@Injectable()
export class UsersService {

    constructor( 
        @InjectModel(ModelsUsers.name) 
        private readonly userModel: IUserModel
    ) {};

    async getUsers(): Promise<IResponseUser> {
        return {
            data: await this.userModel.allUser(),
            message:'Se realizo la consulta correctamente',
        };
    };

    async setUserId(id:TIdUser, data:IUser): Promise<IResponseUser> {
        const response = await this.userModel.updateIdUser(id,data);
        return {
            data:response.data,
            message:response.message,
        };
    };

    async deleteUser(id:TIdUser): Promise<IResponseUser> {
        const response = await this.userModel.deleteOne({ idUser:id });
        return {
            data:null,
            message:response.acknowledged ? `Eliminación correcta, Documentos afectados ${response.deletedCount}` : `Eliminación incorrecta, Documentos afectados ${response.deletedCount}`,
        };
    };

    async addUser(data:IUser): Promise<IResponseUser> {
        const response = await this.userModel.createInstance(data);
        return {
            data:response.data,
            message: response.message,
        };
    };
};