import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Res,
  } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import{UserDto} from './dto/user-dto'
import { ModifyUserDto } from './dto/modify-user-dto';
import { DeleteUserDto } from './dto/delete-user-dto';

@ApiTags('user')
@Controller('user')
export class UserController {

    constructor(private readonly _userService: UserService) {}

    @Get('getUsers')
    async getUsers() {
        return await this._userService.getUsers();;
    }


    @ApiResponse({ status: 200, description: 'Usuario modificado' })
    @ApiResponse({ status: 401, description: 'Acceso no autorizado' })
    @Patch('editUser')
    async edituser(@Body() modifyUserDto : ModifyUserDto){
        return await this._userService.modifyUser(modifyUserDto)
    }

    @ApiResponse({ status: 200, description: 'Usuario Eliminado' })
    @ApiResponse({ status: 401, description: 'Acceso no autorizado' })
    @Delete('deleteUser')
    async deleteUser(@Body() deleteUserDto : DeleteUserDto){
        return await this._userService.deleteUser(deleteUserDto)
    }


}
