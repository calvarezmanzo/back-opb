import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { LoginDto } from './dto';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(private readonly databaseService: DatabaseService,
    private readonly jwtService: JwtService,
  ) { }
  async getTiposUsuario() {
    const result = await this.databaseService.callStoredProc('sp_crud_tb_tipo_usuario', {
      TipoQuery: 'Listar'
    }
    );

    if (!result || result.length === 0) {
      throw new NotFoundException('Tipo de usuarios no encontrados');
    }

    return result;
  }


  async logIn(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const result = await this.databaseService.callStoredProc('sp_crud_tb_usuario', {
      TipoQuery: 'Login',
      Correo: email,
      Password: password,
    });

    if (!result || result.length === 0) {
      throw new NotFoundException('Usuario no encontrado o credenciales incorrectas');
    }
    const payload = { result }


    return {
      access_token: this.jwtService.sign(payload),

    };
  }

}
