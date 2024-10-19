import { Injectable } from '@nestjs/common';
import { CreateExportadoreDto } from './dto/create-exportadore.dto';
import { UpdateExportadoreDto } from './dto/update-exportadore.dto';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ExportadoresService {

  constructor(private readonly databaseService: DatabaseService,
  ) { }


  async findAll() {
    return await this.databaseService.callStoredProc('sp_get_exportadores', {
    });
}


}
