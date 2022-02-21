import { Column, Entity, Index } from "typeorm";

@Index("PK__Orders_d__793933C2E5219644", ["flowKey", "seqNo"], { unique: true })
@Entity("Orders_detail", { schema: "dbo" })
export class OrdersDetail {
  @Column("varchar", {
    primary: true,
    name: "FlowKey",
    length: 50,
    default: () => "''",
  })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no", default: () => "(0)" })
  seqNo: number;

  @Column("char", { name: "NonStockItems", length: 1, default: () => "' '" })
  nonStockItems: string;

  @Column("varchar", { name: "ProductCode", length: 50, default: () => "''" })
  productCode: string;

  @Column("nvarchar", { name: "ProductName", length: 50, default: () => "''" })
  productName: string;

  @Column("varchar", { name: "Warehouse", length: 50, default: () => "''" })
  warehouse: string;

  @Column("varchar", { name: "ReasonCode", length: 50, default: () => "''" })
  reasonCode: string;

  @Column("nvarchar", { name: "Memo", length: 200, default: () => "''" })
  memo: string;

  @Column("varchar", { name: "ShippingDate", length: 10, default: () => "''" })
  shippingDate: string;

  @Column("nvarchar", { name: "Status", length: 50, default: () => "''" })
  status: string;

  @Column("decimal", {
    name: "Qty",
    precision: 10,
    scale: 2,
    default: () => "(0)",
  })
  qty: number;

  @Column("varchar", { name: "Unit", length: 10, default: () => "''" })
  unit: string;

  @Column("decimal", {
    name: "Price",
    precision: 10,
    scale: 4,
    default: () => "(0)",
  })
  price: number;

  @Column("int", { name: "Discount", default: () => "(0)" })
  discount: number;

  @Column("decimal", {
    name: "SalePrice",
    precision: 10,
    scale: 4,
    default: () => "(0)",
  })
  salePrice: number;

  @Column("decimal", {
    name: "Amount",
    precision: 10,
    scale: 2,
    default: () => "(0)",
  })
  amount: number;
}
