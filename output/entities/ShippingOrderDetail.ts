import { Column, Entity, Index } from "typeorm";

@Index("PK__Orders_d__793933C2DC2A4783", ["orderNo", "seq"], { unique: true })
@Entity("ShippingOrder_detail", { schema: "dbo" })
export class ShippingOrderDetail {
  @Column("varchar", {
    primary: true,
    name: "orderNo",
    length: 50,
    default: () => "''",
  })
  orderNo: string;

  @Column("int", { primary: true, name: "seq", default: () => "(0)" })
  seq: number;

  @Column("varchar", {
    name: "productCode",
    nullable: true,
    length: 50,
    default: () => "''",
  })
  productCode: string | null;

  @Column("nvarchar", {
    name: "productName",
    nullable: true,
    length: 50,
    default: () => "''",
  })
  productName: string | null;

  @Column("nvarchar", {
    name: "memo",
    nullable: true,
    length: 200,
    default: () => "''",
  })
  memo: string | null;

  @Column("decimal", {
    name: "qty",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "(0)",
  })
  qty: number | null;

  @Column("nvarchar", {
    name: "unit",
    nullable: true,
    length: 10,
    default: () => "''",
  })
  unit: string | null;

  @Column("decimal", {
    name: "price",
    nullable: true,
    precision: 10,
    scale: 4,
    default: () => "(0)",
  })
  price: number | null;

  @Column("decimal", {
    name: "discount",
    nullable: true,
    precision: 10,
    scale: 4,
    default: () => "(0)",
  })
  discount: number | null;

  @Column("decimal", {
    name: "salePrice",
    nullable: true,
    precision: 10,
    scale: 4,
    default: () => "(0)",
  })
  salePrice: number | null;

  @Column("decimal", {
    name: "amount",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "(0)",
  })
  amount: number | null;
}
