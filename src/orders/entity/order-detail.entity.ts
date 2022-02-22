import { ApiProperty } from '@nestjs/swagger';
import { DetailEntity } from 'src/basic/detailEntity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Order as Master } from './order.entity';

@Entity('orders_detail')
export class OrderDetail extends DetailEntity{
    @ManyToOne(()=>Master, (master:Master)=>master.details)
    @JoinColumn({name: 'flowkey'})
    flowkey: string;

    @ApiProperty({description: '商品料號', example: 'G000001'})
    @Column({length: 20})
    productcode: string

    @ApiProperty({description: '商品名稱', example: '簽名球'})
    @Column({length: 50})
    productname: string

    @ApiProperty({description: '單位', example: '個'})
    @Column({length: 10})
    unit: string

    @ApiProperty({description: '數量', example: 2})
    @Column("decimal",{
        precision: 8,
        scale: 0,
        default: () => "(0)"})
    qty: number

    @ApiProperty({description: '單價', example: 250})
    @Column("decimal",{
        precision: 8,
        scale: 0,
        default: () => "(0)"})
    price: number

    @ApiProperty({description: '金額', example: 500})
    @Column("decimal",{
        precision: 8,
        scale: 0,
        default: () => "(0)"})
    amount: number
}
