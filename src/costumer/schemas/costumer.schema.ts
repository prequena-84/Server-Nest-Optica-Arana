import * as bcrypt from 'bcrypt'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { Document, Model } from 'mongoose'

import type { ICostumer } from 'src/interfaces/costumer/ICostumer'
import type { IResponseCostumer } from 'src/interfaces/response/IResponseCostumer'
import type { TIdCostumer,TUserName, TPassword,TNationality,TDocument } from 'src/types/costumer/TCostumer'

@Schema()
export class ModelsCostumer implements ICostumer {
    @Prop({ required:true, unique:true })
    idCostumer:TIdCostumer

    @Prop({ required:false, unique:true, default:null })
    userName:TUserName

    @Prop({ required:false, default:null })
    Password:TPassword

    @Prop({ required:true })
    name:string

    @Prop({ required:true })
    lastName:string

    @Prop({ required:true, default:'Cedula' })
    typeDocument:TDocument;

    @Prop({ required:true, unique:true })
    numberDocument:number | null;

    @Prop({ required:false, default:'Venezuela' })
    nationality:TNationality

    @Prop({ required:true })
    age:number

    @Prop({ required:true })
    address:string

    @Prop({ required:true, unique:true })
    email:string

    @Prop({ required:true, unique:true })
    telefono:string

    @Prop({ required:false, unique:true, default:null })
    tokenConfirmacion:string

    @Prop({ required:false, unique:true, default:null })
    sessionExpiration:number
}

export type UserDocument = ModelsCostumer & Document
export const CostumerSchema = SchemaFactory.createForClass(ModelsCostumer)

// Luego de las Definiciones de los metodos
export interface ICostumerModel extends Model<UserDocument> {
    allCostumer(): Promise<ICostumer[]>;
    updateIdCostumer(idCostumer:TIdCostumer, data:ICostumer): Promise<IResponseCostumer>;
    createInstance(data:ICostumer): Promise<IResponseCostumer>; 
}

CostumerSchema.pre<UserDocument>('save', async function(next) {
    if (!this.Password) return next() 
    if (!this.isModified('Password')) return next()
    const salt = await bcrypt.genSalt(10)
    this.Password = await bcrypt.hash(this.Password, salt)
    next()
})

CostumerSchema.statics.allCostumer = async function(): Promise<ICostumer[]> {
    return await this.find()
}

CostumerSchema.statics.updateIdCostumer = async function(idCostumer:TIdCostumer, data:ICostumer): Promise<IResponseCostumer> {
    try {
        const updateData:ICostumer = await this.findOneAndUpdate({idCostumer}, data, {new:true})
        return {
            data:updateData,
            message:`Se actualizo los datos del cliente ${updateData.name} ${updateData.lastName} sastifactoriamente`,
        }

    } catch(err) {
        return {
            data:null,
            message:`Se presento el siguiente Error en la actualizacion de datos: ${err}`,
        }
    }
}

CostumerSchema.statics.createInstance = async function(data:ICostumer): Promise<IResponseCostumer> {
    try {

        const {
            idCostumer,
            userName,
            password,
            name,
            lastName,
            typeDocument,
            numberDocument,
            nationality,
            age,
            address,
            email,
            telefono
        } = data

        const newCostumer = new this({
            idCostumer,
            userName,
            password,
            name,
            lastName,
            typeDocument,
            numberDocument,
            nationality,
            age,
            address,
            email,
            telefono
        })

        await newCostumer.save()

        return {
            data:newCostumer,
            message:'Nuevo usuario creado',
        }

    } catch(err) {

        console.error('error en el metodo mongo', err);
        return {
            data:null,
            message:`Se presento el siguiente error al registrar el nuevo cliente: ${err}`,
        }
    }
}