import { ApiProperty } from '@nestjs/swagger';
import { MasterEntity } from 'src/basicClasses/entities/master.entity';
import { Entity, Column, OneToMany } from 'typeorm';
import { OrderDetailEntity as Detail } from './order.detail.entity';

@Entity('orders')
export class OrderEntity extends MasterEntity {

    static REPOSITORY_NAME = 'ORDER_REPOSITORY';

    @ApiProperty({description: '訂單編號', example: 'O1110218001'})
    @Column()
    code: string;

    @ApiProperty({description: '申請人:一律填寫 cpbl-mall', example: 'cpbl-mall'})
    @Column()
    applicant: string;

    @ApiProperty({description: '部門:一侓填寫 B11(商品組)', example: 'B11'})
    @Column()
    createdept: string;

    @ApiProperty({description: '訂單日期', example: '2022-02-18'})
    @Column("varchar",{length: 10})
    orderdate: string;

    @ApiProperty({description: '付款方式(P01:ATM轉帳, P02:超商繳款, P03:信用卡, P04:其他)', example: 'P01'})
    @Column("varchar",{length: 20})
    payment: string;

    @ApiProperty({description: '客戶名稱', example: '王大陸'})
    @Column({length: 50})
    customer: string;

    @ApiProperty({description: '客戶連絡電話', example: '0915333888'})
    @Column({length: 20})
    telno: string;

    @ApiProperty({description: '收件人', example: '陳小姐'})
    @Column({length: 50})
    recipient: string;

    @ApiProperty({description: '收件連絡電話', example: '0915666999'})
    @Column({length: 20})
    contactno: string;

    @ApiProperty({description: '收件地址', example: '台北市八德路三段32號2樓'})
    @Column({length: 100})
    address: string;

    @ApiProperty({description: '備註', example: '到貨前請先電話連絡收件人'})
    @Column({length: 200})
    memo: string;

    @ApiProperty({description: '發票統編(發票如需開立統編則填入，無則空白)', example: '05638601'})
    @Column("varchar",{length: 10})
    vatno: string;

    @ApiProperty({description: '訂單總金額', example: 1020})
    @Column("decimal",{
        precision: 8,
        scale: 0,
        default: () => "(0)"})
    totalamount: number;

    @ApiProperty({description: '訂單狀態(S01:已付款, S02:已出貨, S03:退貨, S04:已取消)', example: 'S01'})
    @Column("varchar",{length: 20})
    orderstatus: string;

    @ApiProperty(
        {description: '訂單明細資料', 
            example: [
                {
                    flowkey: '1O1110218001',
                    seq_no: 1,
                    productcode: 'G020012',
                    productname: '2020 Nurses Day 限定棒球',
                    batchno: '',
                    unit: '顆',
                    qty: 2,
                    price: 250,
                    amount: 500
                },
                {
                    flowkey: '1O1110218001',
                    seq_no: 2,
                    productcode: 'G021023',
                    productname: '2021 Team Taiwan 球員版帽T',
                    batchno: 'G021023.SS',
                    unit: '頂',
                    qty: 2,
                    price: 260,
                    amount: 520
                }
            ]
        }
    )
    @OneToMany(
        ()=>Detail, 
        detail=>detail.flowkey,
        {cascade: true}
    )
    details: Detail[] 

    addDetail(detail: Detail){
        if(this.details == null){
            this.details = new Array<Detail>();
        }
        this.details.push(detail);
    }
}
