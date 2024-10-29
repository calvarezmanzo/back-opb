import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { CreateAnalyticsDto } from './dto/create-analytics.dto';
import { UpdateAnalyticsDto } from './dto/update-analytics.dto';
import { ApiTags } from '@nestjs/swagger';
import { SelectAnalyticsDto } from './dto/select-analytics.dto';
import { SelectLogisticDto } from './dto/select-dashboard-datalogistic';
import { SelectCamaraDto } from './dto/select-dashboard-camara';
@ApiTags('analytics')
@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) { }


  @Get()
  async findAll() {
    return await this.analyticsService.findAll();
  }


  @Post('findAnalytics')
  async findAnalyticsById(@Body() userId: SelectAnalyticsDto) {
    return await this.analyticsService.findAnalyticsById(userId);
  }


  @Post('findDataCamara')
  async findDataLogistic(@Body() request: SelectCamaraDto) {
    return await this.analyticsService.findDataCamara(request);
  }




}
