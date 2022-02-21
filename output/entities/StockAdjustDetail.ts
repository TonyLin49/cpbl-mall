import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_BatchNo_3E723F9C", ["batchNo"], {})
@Index("_WA_Sys_ProductCode_3E723F9C", ["productCode"], {})
@Index("_WA_Sys_Warehouse_3E723F9C", ["warehouse"], {})
@Index("PK__StockAdj__793933C2CC565ED1", ["flowKey", "seqNo"], { unique: true })
@Entity("StockAdjust_detail", { schema: "dbo" })
export class StockAdjustDetail {
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
    name: "StockAdjustReason",
    length: 50,
    default: () => "''",
  })
  stockAdjustReason: string;

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
    precision: 10,
    scale: 2,
    default: () => "(0)",
  })
  qty: number;

  @Column("decimal", {
    name: "Price",
    precision: 18,
    scale: 4,
    default: () => "(0)",
  })
  price: number;

  @Column("decimal", {
    name: "Amount",
    precision: 18,
    scale: 4,
    default: () => "(0)",
  })
  amount: number;
}
