import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAnalyticsDto } from './create-analytics.dto';
import { IsOptional, IsString } from 'class-validator';

export class SelectLogisticDto {
    //Correo electrónico
    //Password
    @ApiProperty({
      example: '',
      description: '',
      nullable: false,
    })
    @IsString()
    @IsOptional()
    readonly clienteId: string;
    @ApiProperty({
      example: '',
      description: '',
      nullable: false,
    })
    @IsString()
    @IsOptional()
    readonly seasonId: string;


  
  }