import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Order } from './order.entity';

@Entity('orders_detail')
export class OrderDetail {
    @ApiProperty({description: '訂單流程代碼', example: '1O1110218001'})
    @PrimaryColumn({length: 50})
    @ManyToOne(()=>Order, (order:Order)=>order.details)
    @JoinColumn({name: 'flowkey'})
    flowkey: string;

    @ApiProperty({description: '訂單明細序號', example: 1})
    @PrimaryColumn()
    seq_no: number

    @ApiProperty({description: '商品料號', example: 'G000001'})
    @Column()
    productcode: string

    @ApiProperty({description: '商品名稱', example: '簽名球'})
    @Column()
    productname: string

    @ApiProperty({description: '單位', example: '個'})
    @Column()
    unit: string

    @ApiProperty({description: '數量', example: 2})
    @Column()
    qty: number

    @ApiProperty({description: '單價', example: 250})
    @Column()
    price: number

    @ApiProperty({description: '金額', example: 500})
    @Column()
    amount: number

}
