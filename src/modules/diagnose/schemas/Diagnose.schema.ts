import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Model } from 'mongoose'

import type { IDiagnose } from 'src/interfaces/diagnose/diagnose.interface'
import type { 
    TIdDiagnose,TIdCostumers,TIdUsers,TSphere,
    TCylinder,TAxis,TAdd,TDpn,THeight,TLensType,
    TLensMaterial,TFormula,TObservation
} from "src/types/diagnose/diagnose.type"
import type { IResponseDiagnose } from 'src/interfaces/response/response-diagnose.interface'

@Schema()
export class ModelsDiagnose implements IDiagnose {
    @Prop({ required:true, unique:true })
    idDiagnose:TIdDiagnose

    @Prop({ required:true })
    idCostumers:TIdCostumers

    @Prop({ required:true })
    idUsers:TIdUsers

    @Prop({ required:false, default:0 })
    sphereR:TSphere

    @Prop({ required:false, default:0 })
    sphereL:TSphere

    @Prop({ required:false, default:0 })
    cylinderR:TCylinder

    @Prop({ required:false, default:0 })
    cylinderL:TCylinder

    @Prop({ required:false, default:0 })
    axisR:TAxis

    @Prop({ required:false, default:0 })
    axisL:TAxis

    @Prop({ required:false, default:0 })
    addR:TAdd

    @Prop({ required:false, default:0 })
    addL:TAdd

    @Prop({ required:false, default:0 })
    dPnR:TDpn

    @Prop({ required:false, default:0 })
    dPnL:TDpn

    @Prop({ required:false, default:0 })
    heightR:THeight

    @Prop({ required:false, default:0 })
    heightL:THeight

    @Prop({ required:false, default:null })
    lensType:TLensType

    @Prop({ required:false, default:null })
    lensMaterial:TLensMaterial

    @Prop({ required:false, default:null })
    formula:TFormula

    @Prop({ required:false, default:null })
    observation:TObservation
}

export type DiagnoseDocument = ModelsDiagnose & Document
export const DiagnoseSchema = SchemaFactory.createForClass(ModelsDiagnose)

export interface IDiagnoseModel extends Model<DiagnoseDocument> {
    updateDataIdDiagnose( idDiagnose:TIdDiagnose, data:IDiagnose ): Promise<IResponseDiagnose>;
    allDiagnose(): Promise<IDiagnose[]>;
    createIntance( data:IDiagnose ): Promise<IResponseDiagnose>;
}

DiagnoseSchema.statics.allDiagnose = async function(): Promise<IDiagnose[]> {
    return await this.find()
}

DiagnoseSchema.statics.updateDataIdDiagnose = async function(idDiagnose:TIdDiagnose, data:IDiagnose): Promise<IResponseDiagnose> {
    try {
        const updateData:IDiagnose = await this.findOneAndUpdate({idDiagnose}, data, {new:true})
        return {
            data:updateData,
            message:`Se actualizo los datos del Diagnostico sastifactoriamente`,
        }

    } catch(err) {
        return {
            data:null,
            message:`Se presento el siguiente Error en la actualizacion de datos: ${err}`,
        }
    }
}

DiagnoseSchema.statics.createIntance = async function(data:IDiagnose):Promise<IResponseDiagnose> {
    try {
        const { 
            idDiagnose, idCostumers, idUsers, sphereR,
            sphereL, cylinderR, cylinderL, axisR, axisL,
            addR, addL, dPnR, dPnL, heightR, heightL,
            lensType, lensMaterial, formula,observation
        } = data

        const newDiagnose = new this({ idDiagnose, idCostumers, idUsers })

        if (sphereR) newDiagnose.sphereR = sphereR
        if (sphereL) newDiagnose.sphereL = sphereL
        if (cylinderR) newDiagnose.cylinderR = cylinderR
        if (cylinderL) newDiagnose.cylinderL = cylinderL
        if (axisR) newDiagnose.axisR = axisR
        if (axisL) newDiagnose.axisL = axisL
        if (addR) newDiagnose.addR = addR
        if (addL) newDiagnose.addL = addL
        if (dPnR) newDiagnose.dPnR = dPnR
        if (dPnL) newDiagnose.dPnL = dPnL
        if (heightR) newDiagnose.heightR = heightR
        if (heightL) newDiagnose.heightL = heightL
        if (lensType) newDiagnose.lensType = lensType
        if (lensMaterial) newDiagnose.lensMaterial = lensMaterial
        if (formula) newDiagnose.formula = formula
        if (observation) newDiagnose.observation = observation

        await newDiagnose.save()

        return {
            data:newDiagnose,
            message:'Se registro el Diagnostico sastifactoriamente',
        }

    } catch(err) {

        console.error('error en el metodo mongo', err)
        return {
            data:null,
            message:`Se presento el siguiente error al registrar el nuevo cliente: ${err}`,
        }
    }
}