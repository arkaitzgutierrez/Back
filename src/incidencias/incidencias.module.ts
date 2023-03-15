import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Incidencia, IncidenciaSchema } from './incidencia.schema';
import { IncidenciasController } from './incidencias.controller';
import { IncidenciasService } from './incidencias.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Incidencia.name,
        schema: IncidenciaSchema,
      },
    ]),
  ],
  controllers: [IncidenciasController],
  providers: [IncidenciasService]
})
export class IncidenciasModule {}
