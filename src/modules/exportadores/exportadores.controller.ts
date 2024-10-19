import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExportadoresService } from './exportadores.service';
import { CreateExportadoreDto } from './dto/create-exportadore.dto';
import { UpdateExportadoreDto } from './dto/update-exportadore.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('exportadores')
@Controller('exportadores')
export class ExportadoresController {
  constructor(private readonly exportadoresService: ExportadoresService) {}


  @Get()
  findAll() {
    return this.exportadoresService.findAll();
  }

}
