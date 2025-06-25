import { Injectable } from '@nestjs/common';
import controllerJWT from '../../common/utils/jwt.services';
import type { IAuthUser } from 'src/interfaces/auth/auth';

@Injectable()
export class AuthService {
    loginUser( data: IAuthUser ): string {
        const token = controllerJWT.generateToken(data.email);
        return token;
    };
};