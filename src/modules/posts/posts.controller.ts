import { Body, Controller, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postService : PostsService){}

    @Post()
    createPost(@Body() payload : any){
        return this.postService.createPost(payload)
    }
}
