import { Controller, Get } from '@nestjs/common';
import { DiagnoseReportService } from './diagnose-report.service';


@Controller('API/V1/diagnose/report')
export class DiagnoseReportController {
    constructor( public diagnoseReportService: DiagnoseReportService ) {};

    @Get()
    async getDiagnoseReport() {
        const response = await this.diagnoseReportService.getReportDiagnose();
        return {
            data:response.data,
            message: response.message,
        };
    };
};