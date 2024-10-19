import { Test, TestingModule } from '@nestjs/testing';
import { ExportadoresController } from './exportadores.controller';
import { ExportadoresService } from './exportadores.service';

describe('ExportadoresController', () => {
  let controller: ExportadoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExportadoresController],
      providers: [ExportadoresService],
    }).compile();

    controller = module.get<ExportadoresController>(ExportadoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
