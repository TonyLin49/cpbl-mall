import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_BatchNo_39E294A9", ["batchNo"], {})
@Index("_WA_Sys_ProductCode_39E294A9", ["productCode"], {})
@Index("_WA_Sys_Warehouse_39E294A9", ["warehouse"], {})
@Index("PK__StockMon__793933C24A254B9B", ["flowKey", "seqNo"], { unique: true })
@Entity("StockMonthlyBalance_detail", { schema: "dbo" })
export class StockMonthlyBalanceDetail {
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

  @Column("decimal", {
    name: "Price",
    precision: 10,
    scale: 4,
    default: () => "(0)",
  })
  price: number;

  @Column("decimal", {
    name: "Amount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  amount: number;
}
