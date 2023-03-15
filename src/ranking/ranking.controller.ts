import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RankingService } from './ranking.service';

@Controller('ranking')
export class RankingController {
    constructor(private readonly rankingService:RankingService){}

    @Get()
    async getall():Promise<any>{
        return await this.rankingService.getall()
    }

    @Get(':uno')
    async getuno(@Param('uno') uno:string):Promise<any>{
        return await this.rankingService.getuno(uno)
    }

    @Post()
    async postuno(@Body() body:any):Promise<any>{
        return await this.rankingService.postone(body)
    }

    @Put('div')
    async updateDiv( @Param('uno') uno:string,@Body() body:any): Promise<any>{
        return await this.rankingService.updateDiv(uno,body)
    }
    @Put('activo')
    async updateActivo( @Param('uno') uno:string,@Body() body:any): Promise<any>{
        return await this.rankingService.updateActivo(uno,body)
    }
    @Delete(':uno')
    async deleteOne(@Param('uno') uno:string) :Promise<any>{
        return await this.rankingService.deleteOne(uno)
    }

}

