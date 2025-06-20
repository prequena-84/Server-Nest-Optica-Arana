import { Controller, Get, Post, Body, Delete, Param, Patch } from '@nestjs/common';
import { CostumerService } from './costumer.service';
import type { ICostumer } from 'src/interfaces/costumer/ICostumer'; 
import type { IResponseCostumer } from 'src/interfaces/response/IResponseCostumer';

@Controller('/costumer')
export class CostumerController {
    constructor( public costumerService:CostumerService ) {}

    @Get()
    async getCostumers(): Promise<IResponseCostumer> {
        const response = await this.costumerService.getCostumers();

        return {
            data:response.data,
            message: response.message,
        };
    };

    @Post()
    async addCostumer( 
        @Body() 
        body:ICostumer 
    ): Promise<IResponseCostumer> { 
        const response = await this.costumerService.addCostumer(body);
        return {
            data: response.data,
            message: response.message,
        }; 
    };

    @Delete(':id')
    async deleteIdCostumer(
        @Param('id') id:number 
    ): Promise<IResponseCostumer> {
        const response = await this.costumerService.deleteCostumer(id);
        return {
            data: response.data,
            message: response.message,
        };
    }

    @Patch(':id')
    async setIdCostumer( 
        @Param('id') id:number, 
        @Body() body:ICostumer 
    ): Promise<IResponseCostumer> {

        const response = await this.costumerService.setCostumerId(id,body);
        return {
            data: response.data,
            message: response.message,
        };
    };      
};