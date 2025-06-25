import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { IAuthUser } from 'src/interfaces/auth/auth';
import type { IResponseAuth } from 'src/interfaces/response/response-auth.interface';

@Controller('auth')
export class AuthController {
    constructor( public auth:AuthService) {}

    @Post()
    getLogin( @Body() body:IAuthUser):IResponseAuth  {
        const token = this.auth.loginUser(body);
        return {
            data:token,
            message:'Login Correcto',
        };
    };
};