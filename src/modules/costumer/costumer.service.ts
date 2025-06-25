import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModelsCostumer, ICostumerModel } from './schemas/costumer.schema';

import type { TIdCostumer } from 'src/types/costumer/costumer.type';
import type { ICostumer } from 'src/interfaces/costumer/costumer.interface';
import type { IResponseCostumer } from 'src/interfaces/response/response-costumer.interface';

@Injectable()
export class CostumerService {
    constructor(
        @InjectModel(ModelsCostumer.name) 
        private readonly costumerModel: ICostumerModel
    ) {};

    async getCostumers(): Promise<IResponseCostumer>{
        try {

            return {
                data: await this.costumerModel.allCostumer(),
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

    async setCostumerId(id:TIdCostumer, data:ICostumer): Promise<IResponseCostumer> {
        try {

            const response = await this.costumerModel.updateIdCostumer(id,data);
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

    async deleteCostumer(id:TIdCostumer): Promise<IResponseCostumer> {
        try {

            const response = await this.costumerModel.deleteOne({ idCostumer:id });
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

    async addCostumer(data:ICostumer): Promise<IResponseCostumer> {
        try {
            const response = await this.costumerModel.createInstance(data);
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
