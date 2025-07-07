import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get(":name")
    getUser(@Param("name") name : string){
        return this.userService.getUser(name)
    }     

    @Post()
    createUser(@Body() payload : any){
        return this.userService.createUser(payload)
    }

    @Get()
    getAllUsers(){
        return this.userService.getAllUsers()
    }

    @Put(":id")
    updateUser(@Param("id") id: string ,@Body() payload :any){
        return this.userService.updateUser(id,payload)
    }
      
}
