import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class DetailEntity {

    @ApiProperty({description: '流程代碼', example: '1O1110218001'})
    @PrimaryColumn({length: 50})
    flowkey: string;

    @ApiProperty({description: '明細序號', example: 1})
    @PrimaryColumn()
    seq_no: number

}