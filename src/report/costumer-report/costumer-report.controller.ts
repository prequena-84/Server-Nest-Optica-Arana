import { Controller, Get,  } from '@nestjs/common';
import { CostumerReportService } from './costumer-report.service';


@Controller('API/V1/costumer/report')
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
