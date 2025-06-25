import { Controller, Get, Post, Body, Delete, Param, Patch } from '@nestjs/common';
import { CostumerReportService } from './costumer-report.service';


@Controller('costumer-report')
export class CostumerReportController {
    constructor( public costumerReportService: CostumerReportService ) {};

    @Get()
    async getDiagnoseReport() {
        const response = await this.costumerReportService.getReportCostumer();
        return {
            data:response.data,
            message: response.message,
        };
    };
};
