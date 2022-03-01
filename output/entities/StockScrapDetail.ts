import { Column, Entity, Index } from "typeorm";

@Index("PK__StockScr__793933C22B6E6EE3", ["flowKey", "seqNo"], { unique: true })
@Entity("StockScrap_detail", { schema: "dbo" })
export class StockScrapDetail {
  @Column("varchar", {
    primary: true,
    name: "FlowKey",
    length: 50,
    default: () => "''",
  })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no", default: () => "(0)" })
  seqNo: number;

  @Column("varchar", {
    name: "StockScrapReason",
    length: 50,
    default: () => "''",
  })
  stockScrapReason: string;

  @Column("varchar", { name: "ProductCode", length: 50, default: () => "''" })
  productCode: string;

  @Column("nvarchar", { name: "ProductName", length: 50, default: () => "''" })
  productName: string;

  @Column("varchar", { name: "Warehouse", length: 50, default: () => "''" })
  warehouse: string;

  @Column("varchar", { name: "BatchNo", length: 50, default: () => "''" })
  batchNo: string;

  @Column("varchar", { name: "Unit", length: 10, default: () => "''" })
  unit: string;

  @Column("decimal", {
    name: "Qty",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  qty: number;
}
