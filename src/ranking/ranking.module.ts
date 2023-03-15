import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RankingController } from './ranking.controller';
import { Ranking, RankingSchema } from './ranking.schema';
import { RankingService } from './ranking.service';

@Module({
  imports: [
  MongooseModule.forFeature([
    {
      name: Ranking.name,
      schema: RankingSchema,
    },
  ]),
],
  controllers: [RankingController],
  providers: [RankingService]
})
export class RankingModule {}
