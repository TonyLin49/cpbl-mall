import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryColumn, JoinTable, OneToMany, JoinColumn } from 'typeorm';
import { OrderDetail } from './order-detail.entity';

@Entity('orders')
export class Order {

    @ApiProperty({description: '流程代碼:為系統碼+訂單編號', example: '1O1110218001'})
    @PrimaryColumn({length: 50})
    flowkey: string;

    @ApiProperty({description: '系統碼:一律填寫 1', example: '1'})
    @Column({length: 10})
    sysno: string;

    @ApiProperty({description: '訂單編號', example: 'O1110218001'})
    @Column({length: 50})
    code: string;

    @ApiProperty({description: '申請人:一律填寫 cpbl-mall', example: 'cpbl-mall'})
    @Column({length: 50})
    applicant: string;

    @ApiProperty({description: '部門:一侓填寫 B11(商品組)', example: 'B11'})
    @Column({length: 50})
    createdept: string;

    @ApiProperty({description: '訂單日期', example: '2022-02-18'})
    @Column({length: 10})
    orderdate: string;

    @ApiProperty({description: '付款方式(P01:ATM轉帳, P02:超商繳款, P03:信用卡, P04:其他)', example: 'P01'})
    @Column({length: 20})
    payment: string;

    @ApiProperty({description: '客戶名稱', example: '張無忌'})
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
    @Column({length: 10})
    vatno: string;

    @ApiProperty({description: '訂單總金額', example: 760})
    @Column()
    totalamount: number;

    @ApiProperty({description: '訂單狀態(S01:已付款, S02:已出貨, S03:退貨, S04:已取消)', example: 'S01'})
    @Column({length: 20})
    orderstatus: string;

    @ApiProperty(
        {description: '訂單明細資料', 
            example: [
                {
                    flowkey: '1O1110218001',
                    seq_no: 1,
                    productcode: 'G020012',
                    productname: '2020 Nurses Day 限定棒球',
                    unit: '顆',
                    qty: 2,
                    price: 250,
                    amount: 500
                },
                {
                    flowkey: '1O1110218001',
                    seq_no: 2,
                    productcode: 'S11102',
                    productname: '雜誌479期',
                    unit: '本',
                    qty: 2,
                    price: 130,
                    amount: 260
                }
            ]
        }
    )
    @OneToMany(
        ()=>OrderDetail, 
        orderDetail=>orderDetail.flowkey,
        {cascade: true}
    )
    details: OrderDetail[] 

    addDetail(detail: OrderDetail){
        if(this.details == null){
            this.details = new Array<OrderDetail>();
        }
        this.details.push(detail);
    }
}
