import { Injectable } from '@nestjs/common';
import { CreateTemporadaDto } from './dto/create-temporada.dto';
import { UpdateTemporadaDto } from './dto/update-temporada.dto';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class TemporadasService {


  
  constructor(private readonly databaseService: DatabaseService,
  ) { }



  async findAll() {
    return await this.databaseService.callStoredProc('sp_get_temporadas', {
    });
}

}
