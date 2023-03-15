import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PosicionDocument= Posicion & Document

@Schema()
export class Posicion{

    @Prop({required:true})
    div:string
    @Prop({required:true})
    direccion:string
    @Prop({required:true})
    activo:string
    @Prop()
    coche:string
}

export const PosicionSchema= SchemaFactory.createForClass(Posicion)

