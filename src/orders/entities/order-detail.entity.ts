import { ApiProperty } from '@nestjs/swagger';
import { DetailEntity } from 'src/basicClasses/entities/detailEntity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { OrderEntity as Master } from './order.entity';

@Entity('orders_detail')
export class OrderDetailEntity extends DetailEntity{

    static REPOSITORY_NAME: string = 'ORDERDETAIL_REPOSITORY';

    @ManyToOne(()=>Master, (master:Master)=>master.details)
    @JoinColumn({name: 'flowkey'})
    flowkey: string;

    @ApiProperty({description: '商品料號', example: 'G021023'})
    @Column({length: 20})
    productcode: string

    @ApiProperty({description: '商品名稱', example: '2021 Team Taiwan 球員版帽T'})
    @Column({length: 50})
    productname: string

    @ApiProperty({description: '商品批號', example: 'G021023.SS'})
    @Column("varchar",{length: 30})
    batchno: string

    @ApiProperty({description: '單位', example: '頂'})
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
