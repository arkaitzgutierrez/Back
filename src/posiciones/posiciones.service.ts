import { Get, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Posicion, PosicionDocument } from './posicion.schema';

@Injectable()
export class PosicionesService {
    constructor(
        @InjectModel(Posicion.name) private PosicionsModel:Model<PosicionDocument>
    ){}

    async getall():Promise<any>{
        return await this.PosicionsModel.find()
    }

    async getuno(uno:string):Promise<any>{
        return await this.PosicionsModel.find({div:uno})
    }

    async postone(body:any):Promise<any>{
        return await this.PosicionsModel.create(body)
    }
    async updateDiv(este:string,uno:any):Promise<any>{
        return await this.PosicionsModel.updateMany(
            {div:uno.div} ,
            {$set :{activo:uno.activo,coche:uno.coche}}
        )
    }
    async updateActivo(este:string,uno:any):Promise<any>{
        return await this.PosicionsModel.updateOne(
            {[este]:"si"} ,
            {$set :{activo:uno.activo,coche:uno.coche}}
        )
    }

    async deleteOne(uno:string) :Promise<any>{
        return await this.PosicionsModel.deleteOne({div:uno})
    }

}
