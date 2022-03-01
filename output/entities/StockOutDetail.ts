import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_BatchNo_70099B30", ["batchNo"], {})
@Index("_WA_Sys_ProductCode_70099B30", ["productCode"], {})
@Index("_WA_Sys_ProductName_70099B30", ["productName"], {})
@Index("_WA_Sys_Seq_no_70099B30", ["seqNo"], {})
@Index("_WA_Sys_Warehouse_70099B30", ["warehouse"], {})
@Index("PK__StockOut__793933C24A39B6B2", ["flowKey", "seqNo"], { unique: true })
@Entity("StockOut_detail", { schema: "dbo" })
export class StockOutDetail {
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
    name: "StockOutReason",
    length: 50,
    default: () => "''",
  })
  stockOutReason: string;

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
