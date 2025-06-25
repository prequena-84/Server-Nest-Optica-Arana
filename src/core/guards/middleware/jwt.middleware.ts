import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';
import jwtServices from '../../../common/utils/jwt.services'
import type { IDecodedToken } from "src/interfaces/middleware/jwt.interface";

@Injectable()
export class JwtMiddleware implements NestMiddleware {
    use(req: Request, _res: Response, next: NextFunction) {
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