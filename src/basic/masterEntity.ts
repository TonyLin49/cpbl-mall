import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class MasterEntity {

    @ApiProperty({description: '流程代碼:為系統碼+單號', example: '1O1110218001'})
    @PrimaryColumn({length: 50})
    flowkey: string;

    @ApiProperty({description: '系統碼:一律填寫 1', example: '1'})
    @Column({length: 10})
    sysno: string;

    @ApiProperty({description: '單號', example: 'O1110218001'})
    @Column({length: 50})
    code: string;

    @ApiProperty({description: '申請人(員工號碼)', example: '10803001'})
    @Column({length: 50})
    applicant: string;

    @ApiProperty({description: '資料部門:申請人所屬部門', example: 'B11'})
    @Column({length: 50})
    createdept: string;

}