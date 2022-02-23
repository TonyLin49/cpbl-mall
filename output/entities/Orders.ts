import { Column, Entity, OneToMany } from "typeorm";
import { OrdersDetail } from "./OrdersDetail";

@Entity("orders", { schema: "dbo" })
export class Orders {
  @Column("nvarchar", { primary: true, name: "flowkey", length: 50 })
  flowkey: string;

  @Column("nvarchar", { name: "sysno", length: 10 })
  sysno: string;

  @Column("nvarchar", { name: "code", length: 40 })
  code: string;

  @Column("nvarchar", { name: "applicant", length: 20 })
  applicant: string;

  @Column("nvarchar", { name: "createdept", length: 20 })
  createdept: string;

  @Column("nvarchar", { name: "orderdate", length: 10 })
  orderdate: string;

  @Column("nvarchar", { name: "payment", length: 20 })
  payment: string;

  @Column("nvarchar", { name: "customer", length: 50 })
  customer: string;

  @Column("nvarchar", { name: "telno", length: 20 })
  telno: string;

  @Column("nvarchar", { name: "recipient", length: 50 })
  recipient: string;

  @Column("nvarchar", { name: "contactno", length: 20 })
  contactno: string;

  @Column("nvarchar", { name: "address", length: 100 })
  address: string;

  @Column("nvarchar", { name: "memo", length: 200 })
  memo: string;

  @Column("nvarchar", { name: "vatno", length: 10 })
  vatno: string;

  @Column("decimal", {
    name: "totalamount",
    precision: 8,
    scale: 0,
    default: () => "(0)",
  })
  totalamount: number;

  @Column("nvarchar", { name: "orderstatus", length: 20 })
  orderstatus: string;

  @OneToMany(() => OrdersDetail, (ordersDetail) => ordersDetail.flowkey2)
  ordersDetails: OrdersDetail[];
}
