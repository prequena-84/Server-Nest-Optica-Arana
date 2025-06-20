import { Module } from '@nestjs/common';
import { CostumerController } from './costumer.controller';
import { CostumerService } from './costumer.service';

@Module({
  controllers: [CostumerController],
  providers: [CostumerService]
})
export class CostumerModule {}
