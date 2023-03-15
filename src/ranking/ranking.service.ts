import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ranking, RankingDocument } from './ranking.schema';

@Injectable()
export class RankingService {
    constructor(
        @InjectModel(Ranking.name) private RankingModel:Model<RankingDocument>
    ){}

    async getall():Promise<any>{
        return await this.RankingModel.find()
    }

    async getuno(uno:string):Promise<any>{
        return await this.RankingModel.find({activo:uno})
    }

    async postone(body:any):Promise<any>{
        return await this.RankingModel.create(body)
    }
    async updateDiv(este:string,uno:any):Promise<any>{
        return await this.RankingModel.updateMany(
            {div:uno.div} ,
            {$set :{activo:uno.activo,coche:uno.coche}}
        )
    }
    async updateActivo(este:string,uno:any):Promise<any>{
        return await this.RankingModel.updateOne(
            {[este]:"si"} ,
            {$set :{activo:uno.activo,coche:uno.coche}}
        )
    }

    async deleteOne(uno:string) :Promise<any>{
        return await this.RankingModel.deleteOne({marca:uno})
    }
}
