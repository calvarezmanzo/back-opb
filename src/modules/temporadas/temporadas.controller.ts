import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TemporadasService } from './temporadas.service';
import { CreateTemporadaDto } from './dto/create-temporada.dto';
import { UpdateTemporadaDto } from './dto/update-temporada.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('temporadas')
@Controller('temporadas')
export class TemporadasController {
  constructor(private readonly temporadasService: TemporadasService) {}

  @Get()
  findAll() {
    return this.temporadasService.findAll();
  }

 
}
