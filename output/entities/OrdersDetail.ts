import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Orders } from "./Orders";

@Entity("orders_detail", { schema: "dbo" })
export class OrdersDetail {
  @Column("varchar", { primary: true, name: "flowkey", length: 50 })
  flowkey: string;

  @Column("int", { primary: true, name: "seq_no" })
  seqNo: number;

  @Column("nvarchar", { name: "productcode", length: 20 })
  productcode: string;

  @Column("nvarchar", { name: "productname", length: 50 })
  productname: string;

  @Column("varchar", { name: "batchno", length: 30 })
  batchno: string;

  @Column("nvarchar", { name: "unit", length: 10 })
  unit: string;

  @Column("decimal", {
    name: "qty",
    precision: 8,
    scale: 0,
    default: () => "(0)",
  })
  qty: number;

  @Column("decimal", {
    name: "price",
    precision: 8,
    scale: 0,
    default: () => "(0)",
  })
  price: number;

  @Column("decimal", {
    name: "amount",
    precision: 8,
    scale: 0,
    default: () => "(0)",
  })
  amount: number;

  @ManyToOne(() => Orders, (orders) => orders.ordersDetails)
  @JoinColumn([{ name: "flowkey", referencedColumnName: "flowkey" }])
  flowkey2: Orders;
}
