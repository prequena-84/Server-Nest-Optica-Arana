import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ModelsDiagnose, DiagnoseSchema } from './schemas/Diagnose.schema';
import { DiagnoseService } from './diagnose.service';
import { DiagnoseController } from './diagnose.controller';

@Module({
  imports:[
    MongooseModule.forFeature([ {name:ModelsDiagnose.name, schema:DiagnoseSchema} ])
  ],
  providers: [DiagnoseService],
  controllers: [DiagnoseController],
  exports:[DiagnoseService]
})
export class DiagnoseModule {};
