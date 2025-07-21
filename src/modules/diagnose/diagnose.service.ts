import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModelsDiagnose,IDiagnoseModel } from './schemas/Diagnose.schema';

import type { TIdDiagnose } from 'src/types/diagnose/diagnose.type';
import type { IDiagnose } from 'src/interfaces/diagnose/diagnose.interface';
import type { IResponseDiagnose } from 'src/interfaces/response/response-diagnose.interface';

@Injectable()
export class DiagnoseService {
    constructor(
        @InjectModel(ModelsDiagnose.name) 
        private readonly diagnoseModel: IDiagnoseModel
    ) {};

    async getDiagnose(): Promise<IResponseDiagnose> {
        return {
            data: await this.diagnoseModel.allDiagnose(),
            message:'Se realizo la consulta correctamente',
        };
    };

    async setDiagnoseId(id:TIdDiagnose, data:IDiagnose): Promise<IResponseDiagnose> {
        const response = await this.diagnoseModel.updateDataIdDiagnose(id,data);
        return {
            data:response.data,
            message:response.message,
        };
    };

    async deleteDiagnose(id:TIdDiagnose): Promise<IResponseDiagnose> {
        const response = await this.diagnoseModel.deleteOne({ idDiagnose:id });
        return {
            data:null,
            message:response.acknowledged ? `Eliminación correcta, Documentos afectados ${response.deletedCount}` : `Eliminación incorrecta, Documentos afectados ${response.deletedCount}`,
        };
    };

    async addDiagnose(data:IDiagnose): Promise<IResponseDiagnose> {
        const response = await this.diagnoseModel.createIntance(data)
        return {
            data:response.data,
            message: response.message,
        };
    };
};
