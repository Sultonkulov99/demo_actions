import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/database/prisma.service';

@Injectable()
export class PostsService {
    constructor(
        private prisma : PrismaService
    ){}

    async createPost(payload : any){
        let newPost = await this.prisma.post.create({
            data:payload
        })

        return {
            success: true,
            message:"New post created",
            data:newPost
        }
    }
}
