import * as bcrypt from 'bcrypt'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { Document, Model } from 'mongoose'

import type { ICostumer } from 'src/interfaces/costumer/ICostumer'
import type { IResponseCostumer } from 'src/interfaces/response/IResponseCostumer'
import type { TIdCostumer,TUserName, TPassword } from 'src/types/costumer/TCostumer'

@Schema()
export class ModelsCostumer implements ICostumer {
    
}