import { Test, TestingModule } from '@nestjs/testing';
import { ExportadoresService } from './exportadores.service';

describe('ExportadoresService', () => {
  let service: ExportadoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExportadoresService],
    }).compile();

    service = module.get<ExportadoresService>(ExportadoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
