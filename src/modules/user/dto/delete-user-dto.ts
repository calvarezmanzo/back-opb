import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, IsString } from "class-validator";



export class DeleteUserDto{

    @ApiProperty({
        example: '',
        description: '',
        nullable: false,
    })
    @IsString()
    @IsOptional()
    readonly randomUser: string;
   
    
}