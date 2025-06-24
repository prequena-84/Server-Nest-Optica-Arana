import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ModelsCostumer, CostumerSchema } from '../../modules/costumer/schemas/costumer.schema';
import { CostumerReportService } from './costumer-report.service';
import { CostumerReportController } from './costumer-report.controller';

@Module({
  imports:[
    MongooseModule.forFeature([{ name:ModelsCostumer.name, schema:CostumerSchema }])
  ],
  controllers: [CostumerReportController],
  providers: [CostumerReportService],
  exports: [CostumerReportService],
})
export class CostumerReportModule {};