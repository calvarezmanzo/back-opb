import { Module } from '@nestjs/common';
import { ExportadoresService } from './exportadores.service';
import { ExportadoresController } from './exportadores.controller';

@Module({
  controllers: [ExportadoresController],
  providers: [ExportadoresService],
})
export class ExportadoresModule {}
