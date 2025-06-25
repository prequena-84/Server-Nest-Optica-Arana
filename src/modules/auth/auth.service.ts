import { Injectable } from '@nestjs/common';
import controllerJWT from '../../common/controllers/jwt.controller';
import type { IAuthUser } from 'src/interfaces/auth/auth';

@Injectable()
export class AuthService {
    loginUser( data: IAuthUser ): string {
        const token = controllerJWT.generateToken(data.email);
        return token;
    };
};