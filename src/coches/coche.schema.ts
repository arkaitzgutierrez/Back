import {Prop,Schema,SchemaFactory} from "@nestjs/mongoose";

import { Document } from "mongoose";

export type cocheDocument = coche & Document

@Schema()

export class coche{
    @Prop()
    id:string
    @Prop({required:true})
    nombre:string
    @Prop()
    ano:string
    @Prop()
    disponible:string
    @Prop()
    color:string
    @Prop()
    foto:string
}

export const cocheSchema = SchemaFactory.createForClass(coche)