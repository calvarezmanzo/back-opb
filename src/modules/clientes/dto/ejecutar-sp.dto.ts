import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';

export class EjecutarSpDto {
    //Correo electrónico
    //Password
    @ApiProperty({
      example: '',
      description: '',
      nullable: false,
    })
    @IsString()
    @IsOptional()
    readonly spName: string;
    @ApiProperty({
      example: '',
      description: '',
      nullable: false,
    })
    @IsObject()
    @IsNotEmpty()
    readonly params: Record<string, any>;


  
  }