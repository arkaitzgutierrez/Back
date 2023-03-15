import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Posicion, PosicionSchema } from './posicion.schema';
import { PosicionesController } from './posiciones.controller';
import { PosicionesService } from './posiciones.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Posicion.name,
        schema: PosicionSchema,
      },
    ]),
  ],
  controllers: [PosicionesController],
  providers: [PosicionesService],
})
export class PosicionesModule {}
