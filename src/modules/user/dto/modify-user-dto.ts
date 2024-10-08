import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, IsString } from "class-validator";



export class ModifyUserDto {

    @ApiProperty({
        example: '',
        description: '',
        nullable: false,
    })

    @IsString()
    @IsOptional()
    readonly randomUser: string;
    @ApiProperty({
        example: '',
        description: '',
        nullable: false,
    })
    
    @IsString()
    @IsOptional()
    readonly tipoUsuarioFk : string;
    @ApiProperty({
        example: '',
        description: '',
        nullable: false,
    })
    
    @IsString()
    @IsOptional()
    readonly nombreUser : string;
    @ApiProperty({
        example: '',
        description: '',
        nullable: false,
    })
    @IsOptional()
    @IsDate()
    readonly fechaNacimiento : Date;
    @ApiProperty({
        example: '',
        description: '',
        nullable: false,
    })
    @IsString()
    @IsOptional()
    readonly fono : string;
    @ApiProperty({
        example: '',
        description: '',
        nullable: false,
    })
    @IsString()
    @IsOptional()
    readonly rut : string;
    @ApiProperty({
        example: '',
        description: '',
        nullable: false,
    })
    @IsString()
    @IsOptional()
    readonly pathPhoto : string;
}