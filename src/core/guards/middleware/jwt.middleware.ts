import { Injectable, NestMiddleware, UnauthorizedException  } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request, Response, NextFunction } from 'express';
import * as bcrypt from 'bcrypt';
import jwtServices from '../../../common/utils/jwt.services'
import type { IDecodedToken } from "src/interfaces/middleware/jwt.interface";
import { ModelsUsers, IUserModel } from 'src/modules/users/schemas/user.schema';

import type { IUser } from "src/interfaces/users/user.interface";

@Injectable()
export class JwtMiddleware implements NestMiddleware {

    constructor(
        @InjectModel(ModelsUsers.name)
        private readonly userModel: IUserModel
    ) {};

    async use(req: Request, _res: Response, next: NextFunction) {

        console.log('ingreso al middleware')

        const { email,password } = req.body;
        console.log( email, password );

        const user = await this.userModel.findOne({email}) as IUser;
        if(!user) throw new UnauthorizedException('Usuario no encontrado');
         console.log('revision de la consulta=',user)

        const validateUser = await bcrypt.compare(password,user.password)
        console.log('revision de la validacion =',validateUser)

        const authHeader = req.headers.authorization;
        if( !authHeader ) throw new UnauthorizedException('Token no enviado');

        const [ type,token ] = authHeader.split(' ');
        if ( type !== 'Bearer' || !token) throw new UnauthorizedException('Formato de token inválido');

        try {
            const decoded = jwtServices.validateToken(token) as IDecodedToken;
            req['userName'] = decoded.userName;
            next();
        } catch(err) {
            throw new UnauthorizedException('Token inválido o expirado');
        };
    };

};

/**
 * Queda pendiente arreglar la ruta de los endpoint definirlas nuevamente
 */