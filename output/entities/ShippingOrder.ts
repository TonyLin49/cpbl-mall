import { Column, Entity, Index } from "typeorm";

@Index("PK__Orders_c__4B913AC79B3136EF", ["orderNo"], { unique: true })
@Entity("ShippingOrder", { schema: "dbo" })
export class ShippingOrder {
  @Column("varchar", {
    primary: true,
    name: "orderNo",
    length: 50,
    default: () => "''",
  })
  orderNo: string;

  @Column("varchar", {
    name: "enterTime",
    nullable: true,
    length: 20,
    default: () => "''",
  })
  enterTime: string | null;

  @Column("nvarchar", {
    name: "customer",
    nullable: true,
    length: 20,
    default: () => "''",
  })
  customer: string | null;

  @Column("varchar", {
    name: "phone",
    nullable: true,
    length: 20,
    default: () => "''",
  })
  phone: string | null;

  @Column("nvarchar", {
    name: "paymentType",
    nullable: true,
    length: 20,
    default: () => "''",
  })
  paymentType: string | null;

  @Column("varchar", {
    name: "shippingDate",
    nullable: true,
    length: 10,
    default: () => "''",
  })
  shippingDate: string | null;

  @Column("decimal", {
    name: "totalAmount",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "(0)",
  })
  totalAmount: number | null;

  @Column("nvarchar", {
    name: "address",
    nullable: true,
    length: 100,
    default: () => "''",
  })
  address: string | null;

  @Column("nvarchar", {
    name: "memo",
    nullable: true,
    length: 200,
    default: () => "''",
  })
  memo: string | null;
}
