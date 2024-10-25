import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { CreateAnalyticsDto } from './dto/create-analytics.dto';
import { UpdateAnalyticsDto } from './dto/update-analytics.dto';
import { ApiTags } from '@nestjs/swagger';
import { SelectAnalyticsDto } from './dto/select-analytics.dto';
import { SelectLogisticDto } from './dto/select-dashboard-datalogistic';
@ApiTags('analytics')
@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}


  @Get()
  async findAll() {
    return await  this.analyticsService.findAll();
  }


  @Post('findAnalytics')
  async findAnalyticsById(@Body() userId : SelectAnalyticsDto){
    return await this.analyticsService.findAnalyticsById(userId);
  }


    @Post('findDataLogistic')
  async findDataLogistic(@Body() request : SelectLogisticDto){
    return await this.analyticsService.findDataLogistic(request);
  }

 
}
