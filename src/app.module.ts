import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CochesModule } from './coches/coches.module';
import { IncidenciasModule } from './incidencias/incidencias.module';
import{MongooseModule} from '@nestjs/mongoose'
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PosicionesModule } from './posiciones/posiciones.module';
import { RankingModule } from './ranking/ranking.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/Hotwheel'),
    AuthModule,
    UsersModule,
    CochesModule, IncidenciasModule, PosicionesModule, RankingModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
