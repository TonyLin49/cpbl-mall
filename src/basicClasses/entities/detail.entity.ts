import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column } from 'typeorm';

@Entity()
export class DetailEntity {

    static REPOSITORY_NAME = 'DETAIL_REPOSITORY';

    @ApiProperty({description: '流程代碼', example: '1O1110218001'})
    @Column("varchar",{primary: true, length: 50})
    flowkey: string;

    @ApiProperty({description: '明細序號', example: 1})
    /* @Column("decimal",{
        primary: true, 
        precision: 8,
        scale: 0}
    ) */
    @Column({primary: true})
    seq_no: number
}