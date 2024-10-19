import { PartialType } from '@nestjs/swagger';
import { CreateExportadoreDto } from './create-exportadore.dto';

export class UpdateExportadoreDto extends PartialType(CreateExportadoreDto) {}
