import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModelsDiagnose,IDiagnoseModel } from '../../modules/diagnose/schemas/Diagnose.schema';
import { IResponseReportDiagnose } from 'src/interfaces/response/response-report-diagnose.interface';

@Injectable()
export class DiagnoseReportService {
    constructor(
        @InjectModel(ModelsDiagnose.name)
        private readonly diagnoseModel: IDiagnoseModel
    ) {};

    async getReportDiagnose(): Promise<IResponseReportDiagnose> {
        const reportDiagnose = await this.diagnoseModel.aggregate([
            {
                $lookup: {
                    from:"modelscostumers",
                    localField:"idCostumers",
                    foreignField:"idCostumer",
                    as:"Costumer",
                }
            },
            {
                $unwind:"$Costumer",
            },
            {
                $lookup: {
                    from:"modelsusers",
                    localField:"idUsers",
                    foreignField:"idUser",
                    as:"User",
                }
            },
            {
                $unwind:"$User",
            }
        ]);

        return {
            data:reportDiagnose,
            message:"Reporte Tabla Proncipal de Dianostico"
        };
    };
};