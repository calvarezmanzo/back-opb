import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { LoginDto } from './dto';


@Injectable()
export class AuthService {
  constructor(private readonly databaseService: DatabaseService) {}
  async getTiposUsuario() {
    return this.databaseService.callStoredProc('sp_crud_tb_tipo_usuario', [
      'Select',
    ]);
  }


  async logIn(loginDto:LoginDto) {
    return this.databaseService.callStoredProc('sp_crud_tb_usuario', [
      'Login',
      loginDto.email,
      loginDto.password
    ]);
  }

}
