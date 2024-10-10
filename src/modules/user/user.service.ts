import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { LoginDto } from '../auth/dto';
import { ModifyUserDto } from './dto/modify-user-dto';
import { DeleteUserDto } from './dto/delete-user-dto';


@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}
  
  async getUsers() {
    return this.databaseService.callStoredProc('sp_crud_tb_usuario', {
      TipoQuery: 'Listar',

    });
  }


  async modifyUser(modifyUserDto : ModifyUserDto){
    const {  tipoUsuarioFk , nombreUser, fechaNacimiento, fono, rut, pathPhoto , randomUser  } = modifyUserDto;
    return this.databaseService.callStoredProc('sp_crud_tb_usuario', {
      TipoQuery: 'Modificar',
      TipoUsuario: tipoUsuarioFk,
      NombreUser: nombreUser,
      FechaNacimiento: fechaNacimiento,
      Fono: fono,
      Rut: rut,
      PathPhoto:pathPhoto,
      RandomUser : randomUser
    });
  }


  async deleteUser(deleteUserDto : DeleteUserDto){
    const {  randomUser  } = deleteUserDto;
    return this.databaseService.callStoredProc('sp_crud_tb_usuario', {
      TipoQuery: 'Eliminar',
      RandomUser : randomUser
    });
  }

}
