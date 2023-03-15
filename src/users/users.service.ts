import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.schema';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel:Model<UserDocument>
    ){}
    async getuserone(nombre:string):Promise<any>{
        return await this.userModel.findOne({username:nombre})
    }
    
    async postuno(body:any){
        // let Id={userID:this.userModel.length+1}
        let data = await this.userModel.find()
        body.userId = data.length+1;
        await this.userModel.create(body)

    }
}
