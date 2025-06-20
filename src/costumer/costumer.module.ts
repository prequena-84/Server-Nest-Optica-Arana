import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ModelsCostumer,CostumerSchema } from './schemas/costumer.schema';
import { CostumerService } from './costumer.service';
import { CostumerController } from './costumer.controller';

@Module({
  imports:[
    MongooseModule.forFeature([ {name:ModelsCostumer.name,schema:CostumerSchema} ])
  ],
  providers: [CostumerService],
  controllers: [CostumerController],
  exports:[CostumerService],
})
export class CostumerModule {}