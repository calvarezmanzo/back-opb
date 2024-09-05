import { ApiProperty } from '@nestjs/swagger';
import {  IsEmail, IsOptional, IsString } from 'class-validator';

export class LoginDto {
  //Correo electrónico
  @ApiProperty({
    example: 'ejemplo@ejemplo.com',
    description: 'Correo electrónico',
    nullable: false,
  })
  @IsEmail()
  readonly email: string;

  //Password
  @ApiProperty({
    example: '',
    description: '',
    nullable: false,
  })
  @IsString()
  @IsOptional()
  readonly password: string;

}
