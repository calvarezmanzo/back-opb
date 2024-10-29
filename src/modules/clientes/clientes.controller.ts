import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ApiTags } from '@nestjs/swagger';
import { EjecutarSpDto } from './dto/ejecutar-sp.dto';

@ApiTags('clientes')
@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}



  @Get('getClientes')
  async findAll() {
    return await  this.clientesService.findAll();
  }

  @Post('ejecutarSP')
  async ejecutarSP(@Body() body : EjecutarSpDto): Promise<any> {
    const { spName, params } = body;
    return await this.clientesService.ejecutarSP(spName, params);
  }


}
