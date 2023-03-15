import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type IncidenciaDocument= Incidencia & Document

@Schema()
export class Incidencia{

    @Prop({required:true})
    nombre:string
    @Prop({required:true})
    imagen:string
    @Prop({required:true})
    aviso:string
}

export const IncidenciaSchema= SchemaFactory.createForClass(Incidencia)

