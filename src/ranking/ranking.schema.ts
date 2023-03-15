import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type RankingDocument= Ranking & Document

@Schema()
export class Ranking{

    @Prop({required:true})
    nombre:string
    @Prop({required:true})
    marca:string
    @Prop({required:true})
    puesto:string
    @Prop()
    coche:string
}

export const RankingSchema= SchemaFactory.createForClass(Ranking)
