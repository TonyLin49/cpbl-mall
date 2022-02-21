import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_BatchNo_67A95F59", ["batchNo"], {})
@Index("_WA_Sys_DifferenceQty_67A95F59", ["differenceQty"], {})
@Index("_WA_Sys_ProductCode_67A95F59", ["productCode"], {})
@Index("_WA_Sys_Seq_no_67A95F59", ["seqNo"], {})
@Index("PK__StockTac__793933C2570F7771", ["flowKey", "seqNo"], { unique: true })
@Entity("StockTack_detail", { schema: "dbo" })
export class StockTackDetail {
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

  @Column("decimal", {
    name: "OnHandQty",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  onHandQty: number;

  @Column("decimal", {
    name: "StockQty",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  stockQty: number;

  @Column("decimal", {
    name: "DifferenceQty",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  differenceQty: number;

  @Column("varchar", { name: "Unit", length: 10, default: () => "''" })
  unit: string;
}
