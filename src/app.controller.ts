import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
    @Get('API/V1')
    getWelcome(): string {
        return 'Bienvenidos a la API de Servicios de la Optica Arana V0.0.01/2025';
    };
};