import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ModelsUsers,UserSchema } from './schemas/user.schema';
import { UsersService } from './users.service'
import { UsersController } from './users.controller';

@Module({
  imports:[
    MongooseModule.forFeature([ {name:ModelsUsers.name, schema:UserSchema} ])
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports:[
    UsersService,
    MongooseModule,  // Se exporta el modelo de mongoose para que otro modulo como un middleware lo pueda utilizar
  ],
})
export class UsersModule {};
