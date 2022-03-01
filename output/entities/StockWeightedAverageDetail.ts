import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_ProductCode_50C5FA01", ["productCode"], {})
@Index("PK__StockWei__793933C2C3AF96C0", ["flowKey", "seqNo"], { unique: true })
@Entity("StockWeightedAverage_detail", { schema: "dbo" })
export class StockWeightedAverageDetail {
  @Column("varchar", {
    primary: true,
    name: "FlowKey",
    length: 50,
    default: () => "''",
  })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no", default: () => "(0)" })
  seqNo: number;

  @Column("varchar", { name: "ProductCode", length: 50, default: () => "''" })
  productCode: string;

  @Column("nvarchar", { name: "ProductName", length: 50, default: () => "''" })
  productName: string;

  @Column("varchar", { name: "Unit", length: 10, default: () => "''" })
  unit: string;

  @Column("decimal", {
    name: "InitAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  initAmount: number;

  @Column("decimal", {
    name: "PurchaseAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  purchaseAmount: number;

  @Column("decimal", {
    name: "AdjustAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  adjustAmount: number;

  @Column("decimal", {
    name: "InitQty",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  initQty: number;

  @Column("decimal", {
    name: "PurchaseQty",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  purchaseQty: number;

  @Column("decimal", {
    name: "AdjustQty",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  adjustQty: number;

  @Column("decimal", {
    name: "AvarageCost",
    precision: 18,
    scale: 6,
    default: () => "(0)",
  })
  avarageCost: number;
}
