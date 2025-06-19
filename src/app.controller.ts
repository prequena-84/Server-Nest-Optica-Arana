import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
    @Get('/')
    getHello(): string {
        return 'Bienvenidos a la API de Servicios de la Optica Arana V0.0.01/2025';
    };
};