import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ModelsCostumer, ICostumerModel } from '../../modules/costumer/schemas/costumer.schema';
import type { IResponseReportCostumer } from 'src/interfaces/response/IResponseReportCostumer';

@Injectable()
export class CostumerReportService {
    constructor(
        @InjectModel(ModelsCostumer.name)
        private readonly costumerModel: ICostumerModel
    ) {};

    async getReportCostumer(): Promise<IResponseReportCostumer> {
        const reportDiagnose = await this.costumerModel.aggregate([
        // Para Unificación de clientes y diagnosticos
        {
            $lookup: {
                from: "modelsdiagnoses",
                localField: "idCostumer",
                foreignField: "idCostumers",
                as: "Diagnoses"
            }
        },
        // Para traer diagnósticos uno a uno y luego reagrupar.
        {
            $unwind: {
                path: "$Diagnoses",
                preserveNullAndEmptyArrays: true // por si un cliente no tiene diagnósticos.
            }
        },
        // Une los diagnósticos con los usuarios que los crearon
        {
            $lookup: {
                from: "modelsusers",
                localField: "Diagnoses.idUsers",
                foreignField: "idUser",
                as: "Diagnoses.User"
            }
        },
        // Porque el lookup devuelve un array y queremos traer el objeto directamente.
        {
            $unwind: {
                path: "$Diagnoses.User",
                preserveNullAndEmptyArrays: true
            }
        },
        // Agrupa todos los diagnósticos por cliente, devolviendo los datos del cliente y empujando los diagnósticos en un array.
        {
            $group: {
                _id: "$_id",
                idCostumer: { $first: "$idCostumer" },
                userName: { $first: "$userName" },
                password: { $first: "$password" },
                name: { $first: "$name" },
                lastName: { $first: "$lastName" },
                typeDocument: { $first: "$typeDocument" },
                numberDocument: { $first: "$numberDocument" },
                nationality: { $first: "$nationality" },
                age: { $first: "$age" },
                address: { $first: "$address" },
                email: { $first: "$email" },
                telefono: { $first: "$telefono" },
                tokenConfirmacion: { $first: "$tokenConfirmacion" },
                sessionExpiration: { $first: "$sessionExpiration" },
                __v: { $first: "$__v" },
                Diagnoses: { $push: "$Diagnoses" }
            }
        }
    ]);

        return {
            data:reportDiagnose,
            message:"Reporte de dianosticos de los Clientes"
        };
    };
};