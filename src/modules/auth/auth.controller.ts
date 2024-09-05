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
import { AuthService } from './auth.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import{LoginDto} from './dto/login-dto'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get('getTiposUsuario')
    async getTiposUsuario() {
        const tipoUser=await this.authService.getTiposUsuario();
        console.log(tipoUser[0][0].response)
        return tipoUser;
    }


    @Post('login')
    @ApiResponse({ status: 200, description: 'Usuario encontrado' })
    @ApiResponse({ status: 401, description: 'Acceso no autorizado' })
    logIn(@Body() LoginDto: LoginDto) {
        return this.authService.logIn(LoginDto);
    }
    }

