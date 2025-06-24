import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModelsDiagnose,IDiagnoseModel } from './schemas/Diagnose.schema';

import type { TIdDiagnose } from 'src/types/diagnose/TDiagnose';
import type { IDiagnose } from 'src/interfaces/diagnose/Idiagnose';
import type { IResponseDiagnose } from 'src/interfaces/response/IResponsediagnose';

@Injectable()
export class DiagnoseService {
    constructor(
        @InjectModel(ModelsDiagnose.name) 
        private readonly diagnoseModel: IDiagnoseModel
    ) {};

    async getDiagnose(): Promise<IResponseDiagnose> {
        try {

            return {
                data: await this.diagnoseModel.allDiagnose(),
                message:'Se realizo la consulta correctamente',
            };
        } catch(err) {

            console.error('ocurrio el siguiente error', err);
            return {
                data:null,
                message: `Ocurrio el siguiente error en la consulta: ${err}`,
            };
        };
    }

    async setDiagnoseId(id:TIdDiagnose, data:IDiagnose): Promise<IResponseDiagnose> {
        try {

            const response = await this.diagnoseModel.updateDataIdDiagnose(id,data);
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

    async deleteDiagnose(id:TIdDiagnose): Promise<IResponseDiagnose> {
        try {

            const response = await this.diagnoseModel.deleteOne({ idDiagnose:id });
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

    async addDiagnose(data:IDiagnose): Promise<IResponseDiagnose> {
        try {
            const response = await this.diagnoseModel.createIntance(data)
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
