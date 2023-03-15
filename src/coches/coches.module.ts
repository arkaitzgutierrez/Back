import { Module } from '@nestjs/common';
import { coche, cocheSchema } from './coche.schema';
import { CochesController } from './coches.controller';
import { CochesService } from './coches.service';
import {MongooseModule} from '@nestjs/mongoose'

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:coche.name,
        schema:cocheSchema
      }
    ])
  ],
  controllers: [CochesController],
  providers: [CochesService]
})
export class CochesModule {}
