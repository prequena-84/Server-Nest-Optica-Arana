import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ModelsDiagnose, DiagnoseSchema } from '../../modules/diagnose/schemas/Diagnose.schema';
import { DiagnoseReportService } from './diagnose-report.service';
import { DiagnoseReportController } from './diagnose-report.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ModelsDiagnose.name, schema: DiagnoseSchema }])
  ],
  controllers: [DiagnoseReportController],
  providers: [DiagnoseReportService],
  exports:[DiagnoseReportService],
})
export class DiagnoseReportModule {};