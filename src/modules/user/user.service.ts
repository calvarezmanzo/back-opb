import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { LoginDto } from '../auth/dto';


@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}
  
  async getUsers() {
    return this.databaseService.callStoredProc('sp_crud_tb_usuario', [
      'Listar',
      '',
      ''
    ]);
  }

}
