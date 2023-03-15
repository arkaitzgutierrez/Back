import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Delete } from '@nestjs/common/decorators';
import { PosicionesService } from './posiciones.service';

@Controller('posiciones')
export class PosicionesController {
    constructor(private readonly posicionesService:PosicionesService){}

    @Get()
    async getall():Promise<any>{
        return await this.posicionesService.getall()
    }

    @Get(':uno')
    async getuno(@Param('uno') uno:string):Promise<any>{
        return await this.posicionesService.getuno(uno)
    }

    @Post()
    async postuno(@Body() body:any):Promise<any>{
        return await this.posicionesService.postone(body)
    }

    @Put('div')
    async updateDiv( @Param('uno') uno:string,@Body() body:any): Promise<any>{
        return await this.posicionesService.updateDiv(uno,body)
    }
    @Put('activo')
    async updateActivo( @Param('uno') uno:string,@Body() body:any): Promise<any>{
        return await this.posicionesService.updateActivo(uno,body)
    }
    @Delete(':uno')
    async deleteOne(@Param('uno') uno:string) :Promise<any>{
        return await this.posicionesService.deleteOne(uno)
    }

}
