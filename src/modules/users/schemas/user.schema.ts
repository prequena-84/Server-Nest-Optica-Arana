import * as bcrypt from 'bcrypt'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { Document, Model } from 'mongoose'
import type { IUser } from 'src/interfaces/users/user.interface'
import type { IResponseUser } from 'src/interfaces/response/response-user.interface'
import type { TIdUser } from 'src/types/users/users.type'

@Schema()
export class ModelsUsers implements IUser {
    @Prop({ required:true, unique:true })
    idUser: number

    @Prop({required:true})
    password: string

    @Prop({required:true})
    userName: string

    @Prop({required:true})
    name: string

    @Prop({required:true})
    lastName: string

    @Prop({ required:true, unique:true })
    email: string

    @Prop({ required:false, unique:true, default:null })
    telefono: string

    @Prop({ required:false, default:null })
    tokenConfirmacion: string

    @Prop({ required:false, default:null })
    sessionExpiration: number
}
export type UserDocument = ModelsUsers & Document
export const UserSchema = SchemaFactory.createForClass(ModelsUsers)

export interface IUserModel extends Model<UserDocument> {
    allUser(): Promise<IUser[]>;
    updateIdUser(idUser:TIdUser, data:IUser): Promise<IResponseUser>;
    createInstance(data:IUser): Promise<IResponseUser>; 
}

UserSchema.pre<UserDocument>('save', async function(next) {

    if (!this.password) return next() 
    if (!this.isModified('password')) return next()

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

UserSchema.statics.allUser = async function(): Promise<IUser[]> {
    return await this.find()
}

UserSchema.statics.updateIdUser = async function(idUser:TIdUser, data:IUser): Promise<IResponseUser> {
    try {

        const updateData:IUser = await this.findOneAndUpdate({idUser}, data, {new:true})
        return {
            data:updateData,
            message:`Se actualizo los datos del usuario #${updateData.userName} sastifactoriamente`,
        }
    } catch(err) {

        return {
            data:null,
            message:`Se presento el siguiente Error en la actualizacion de datos: ${err}`,
        }
    }
}

UserSchema.statics.createInstance = async function(data:IUser): Promise<IResponseUser> {
    try {

        const {
            idUser,
            userName,
            password,
            name,
            lastName,
            email,
            telefono,
        } = data

        const newUser = new this({
            idUser,
            userName,
            password,
            name,
            lastName,
            email,
            telefono,
        })

        await newUser.save()

        return {
            data:newUser,
            message:'Nuevo usuario creado',
        }

    } catch(err) {

        console.error('error en el metodo mongo', err)
        return {
            data:null,
            message:`Se presento el siguiente error al registrar al nuevo usuario: ${err}`,
        }
    }
}