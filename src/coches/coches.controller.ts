import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthguard } from 'src/auth/jwt-auth.guards';
import { CochesService } from './coches.service';

@Controller('coches')
export class CochesController {
    constructor(private readonly cochesService:CochesService){}

@Get()
async getall():Promise<any>{
    return await this.cochesService.getall()
}

@Get('color/:uno')
async getcolor(@Param() params:any):Promise<any>{
     return await this.cochesService.getcolor(params)
}
@Get('ano/:uno')
async getano(@Param() params:any):Promise<any>{
     return await this.cochesService.getano(params)
}
@Get('nombre/:uno')
async getnombre(@Param() params:any):Promise<any>{
     return await this.cochesService.getnombre(params)
}

@UseGuards(JwtAuthguard)
@Post()
async postOne(@Body() body:any):Promise<any>{
    await this.cochesService.postOne(body)
    console.log(body)
    let resultado={mensaje:body.nombre}
    console.log(resultado)
    return (resultado)
}

@Delete(':id')
async deleteOne(@Param('id') id:string):Promise<any>{
return await this.cochesService.delete(id)
}

}
