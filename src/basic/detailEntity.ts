import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column } from 'typeorm';

@Entity()
export class DetailEntity {
    @ApiProperty({description: '流程代碼', example: '1O1110218001'})
    @Column({primary: true, length: 50})
    flowkey: string;

    @ApiProperty({description: '明細序號', example: 1})
    @Column("decimal",{
        primary: true, 
        precision: 8,
        scale: 0}
    )
    seq_no: number
}