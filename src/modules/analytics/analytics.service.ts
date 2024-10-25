import { Injectable } from '@nestjs/common';
import { CreateAnalyticsDto } from './dto/create-analytics.dto';
import { UpdateAnalyticsDto } from './dto/update-analytics.dto';
import { DatabaseService } from '../database/database.service';
import { SelectAnalyticsDto } from './dto/select-analytics.dto';
import { SelectLogisticDto } from './dto/select-dashboard-datalogistic';

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

  async findDataLogistic(request: SelectLogisticDto) {
    const { clienteId, seasonId } = request;
    return  await this.databaseService.callStoredProc('sp_dashboard_DataLogistic', {
      ClienteId: clienteId,
      SeasonId: seasonId
     
    });
  }


  async findAnalyticsById(userId : SelectAnalyticsDto){
    const {clienteId, seasonId, exportadoresId} = userId;
    return  await this.databaseService.callStoredProc('sp_select_DataLogistic', {
      ClienteId: clienteId,
      SeasonId: seasonId,
      ExportadoresId : exportadoresId
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
