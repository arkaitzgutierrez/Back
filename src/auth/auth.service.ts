import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    
    constructor(private userservice:UsersService,
        private jwtService:JwtService){}
    async validete(username:string,passw:string):Promise<any>{
        const user=await this.userservice.getuserone(username);
        if(user && user.password==passw){
            const{password,...result}=user;
            return result
        }
        return null
    }

    login(user:any){
        console.log(`Login en auth.service`)
        const payload={username:user.username,sub:user.userId};
        return{
            acces_token: this.jwtService.sign(payload)
        }
    }
    }
