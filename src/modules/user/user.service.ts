import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/database/prisma.service';

@Injectable()
export class UserService {
    constructor(
        private prisma : PrismaService
    ){}

    async getUser(name : string) {
        let user = await this.prisma.user.findFirst({
            where:{
                name:name
            }
        })

        return user
    }

    async getAllUsers() {
        let users = await this.prisma.user.findMany({
            select:{
                id:true,
                name:true,
                isActive:true,
                posts:{
                    select:{
                        id:true,
                        title:true,
                        body:true
                    }
                }
            }
        })
        return users
    }

    async createUser(payload: any) {
        let newUser = await this.prisma.user.create({
            data:payload
        })

        return {
            success:true,
            message:"New user created!",
            data:newUser
        }
    }

    async updateUser(id : string, payload : any){
        let update = await this.prisma.user.update({
            where:{
                id:id
            },
            data:payload
        })

        return {
            success: true,
            message:"update user",
            data:update
        }
    }
}
