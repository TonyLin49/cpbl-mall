import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_BatchNo_1387E197", ["batchNo"], {})
@Index("_WA_Sys_ProductCode_1387E197", ["productCode"], {})
@Index("PK__StockTra__793933C2228B2F93", ["flowKey", "seqNo"], { unique: true })
@Entity("StockTrans_detail", { schema: "dbo" })
export class StockTransDetail {
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

  @Column("varchar", { name: "ReasonCode", length: 50, default: () => "''" })
  reasonCode: string;
}
