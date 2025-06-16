import { Module } from '@nestjs/common';
import { ModelsController } from './models.controller';

/**
 * Para crear un archivo de controller sin el archivo de inpeccinar se hace creando el controller con el comando g co models --no-spec
 * quede en el minuto 35
 */

@Module({
  controllers: [ModelsController]
})
export class ModelsModule {}
