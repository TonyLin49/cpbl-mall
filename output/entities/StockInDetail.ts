import { Column, Entity, Index } from "typeorm";

@Index("PK__StockIn___793933C2AAF33336", ["flowKey", "seqNo"], { unique: true })
@Entity("StockIn_detail", { schema: "dbo" })
export class StockInDetail {
  @Column("varchar", {
    primary: true,
    name: "FlowKey",
    length: 50,
    default: () => "''",
  })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no", default: () => "(0)" })
  seqNo: number;

  @Column("varchar", { name: "StockInReason", length: 50, default: () => "''" })
  stockInReason: string;

  @Column("varchar", {
    name: "ManufactureOrder",
    length: 50,
    default: () => "''",
  })
  manufactureOrder: string;

  @Column("int", { name: "ManufactureOrderSeqNo", default: () => "(0)" })
  manufactureOrderSeqNo: number;

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
}
