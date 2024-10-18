import { Injectable } from '@nestjs/common';
import { CreateAnalyticsDto } from './dto/create-analytics.dto';
import { UpdateAnalyticsDto } from './dto/update-analytics.dto';
import { DatabaseService } from '../database/database.service';
import { SelectAnalyticsDto } from './dto/select-analytics.dto';

@Injectable()
export class AnalyticsService {

  constructor(private readonly databaseService: DatabaseService,
    
  ) { }

  create(createAnalyticsDto: CreateAnalyticsDto) {
    return 'This action adds a new analytics';
  }

  async findAll() {
    return  await this.databaseService.callStoredProc('sp_select_DataLogistic', {
    });
  }

  async findAnalyticsById(userId : SelectAnalyticsDto){
    const {clienteId} = userId;
    return  await this.databaseService.callStoredProc('sp_select_DataLogistic', {
      ClienteId: clienteId
    });

  }

  findOne(id: number) {
    return `This action returns a #${id} analytics`;
  }

  update(id: number, updateAnalyticsDto: UpdateAnalyticsDto) {
    return `This action updates a #${id} analytics`;
  }

  remove(id: number) {
    return `This action removes a #${id} analytics`;
  }
}
