import { Injectable } from '@nestjs/common';
import { cocheDocument } from './coche.schema';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {coche} from './coche.schema';

@Injectable()
export class CochesService {
constructor(
    @InjectModel(coche.name) private cochesModel:Model<cocheDocument>,
    ){}
    
    async getall():Promise<any>{
        
        return await this.cochesModel.find()
    }

    async getcolor(otro:any):Promise<coche[]>{
        console.log(otro)
        let resultado= await this.cochesModel.find({"color":otro.uno})
        console.log(resultado)
        return resultado
        }
        async getano(otro:any):Promise<coche[]>{
            console.log(otro)
            let resultado= await this.cochesModel.find({"ano":otro.uno})
            console.log(resultado)
            return resultado
            }
            async getnombre(otro:any):Promise<coche[]>{
                console.log(otro)
                let resultado= await this.cochesModel.find({"nombre":otro.uno})
                console.log(resultado)
                return resultado
                }
    async postOne(body:any){
        let otro=await this.cochesModel.find()
        let final=otro.length
        let nuevo ={...body,id:`${final+1}`}
        console.log(nuevo)
        this.cochesModel.create(nuevo)
        return body.nombre;
    }
    async delete(id:string) :Promise<any>{
        return await this.cochesModel.deleteOne({id:id})
    }
}


