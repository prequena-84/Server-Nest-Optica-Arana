import * as bcrypt from 'bcrypt'
import { Request, Response, NextFunction } from 'express'
import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { ModelsUsers, IUserModel } from 'src/modules/users/schemas/user.schema'
import jwtServices from '../../../common/utils/jwt.services'
import type { IDecodedToken } from "src/interfaces/middleware/jwt.interface"
import type { IUser } from "src/interfaces/users/user.interface"

@Injectable()
export class JwtMiddleware implements NestMiddleware {
    constructor(
        @InjectModel(ModelsUsers.name)
        private readonly userModel: IUserModel
    ) {}

    async use(req: Request, _res: Response, next: NextFunction) {
        const { email,password } = req.body
        if ( !email || !password ) throw new UnauthorizedException('Por favor ingrese un correo o contraseña valida')

        const user = await this.userModel.findOne({email}) as IUser
        if (!user) throw new UnauthorizedException('Usuario no encontrado')

        const validateUser = await bcrypt.compare(password,user.password)
        if ( !validateUser ) throw new UnauthorizedException('Por favor ingrese una clava valida')

        const authHeader = req.headers.authorization
        if( !authHeader ) throw new UnauthorizedException('Token no enviado')

        const [ type,token ] = authHeader.split(' ');
        if ( type !== 'Bearer' || !token) throw new UnauthorizedException('Formato de token inválido')

        try {
            const decoded = jwtServices.validateToken(token) as IDecodedToken
            req['userName'] = decoded.userName
            next()
        } catch(err) {
            throw new UnauthorizedException('Token inválido o expirado')
        }
    }
}