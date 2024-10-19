import { Controller, Get } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('clientes')
@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}



  @Get()
  async findAll() {
    return await  this.clientesService.findAll();
  }



}
