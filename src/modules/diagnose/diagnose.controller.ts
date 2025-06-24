import { Controller, Get, Post, Body, Delete, Param, Patch } from '@nestjs/common';
import { DiagnoseService } from './diagnose.service';

import type { IDiagnose } from 'src/interfaces/diagnose/Idiagnose';
import type { TIdDiagnose } from 'src/types/diagnose/TDiagnose';
import type { IResponseDiagnose } from 'src/interfaces/response/IResponsediagnose';

@Controller('/diagnose')
export class DiagnoseController {
    constructor( public diagnoseService:DiagnoseService ) {};

    @Get()
        async getDiagnose(): Promise<IResponseDiagnose> {
        const response = await this.diagnoseService.getDiagnose();
        return {
            data:response.data,
            message: response.message,
        };
    };

    @Post()
    async addDiagnose( @Body() body:IDiagnose ): Promise<IResponseDiagnose> { 
        const response = await this.diagnoseService.addDiagnose(body);
        return {
            data: response.data,
            message: response.message,
        }; 
    };

    @Delete(':id')
    async deleteIdDiagnose( @Param('id') id:TIdDiagnose ): Promise<IResponseDiagnose> {
        const response = await this.diagnoseService.deleteDiagnose(id);
        return {
            data: response.data,
            message: response.message,
        };
    };

    @Patch(':id')
    async setIdDiagnose( @Param('id') id:TIdDiagnose, @Body() body:IDiagnose ): Promise<IResponseDiagnose> {

        const response = await this.diagnoseService.setDiagnoseId(id,body);
        return {
            data: response.data,
            message: response.message,
        };
    }; 
};
