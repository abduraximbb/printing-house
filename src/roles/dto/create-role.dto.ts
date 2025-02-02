import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateRoleDto {
  @ApiProperty({ example: "Publisher", description: "Enter worker's role" })
  @IsString()
  @IsNotEmpty()
  role_name: string;
}
