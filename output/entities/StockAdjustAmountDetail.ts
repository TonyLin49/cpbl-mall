import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_ProductCode_2882FE7D", ["productCode"], {})
@Index("_WA_Sys_Seq_no_2882FE7D", ["seqNo"], {})
@Index("_WA_Sys_Warehouse_2882FE7D", ["warehouse"], {})
@Index("PK__StockAdj__793933C2D48AAFC6", ["flowKey", "seqNo"], { unique: true })
@Entity("StockAdjustAmount_detail", { schema: "dbo" })
export class StockAdjustAmountDetail {
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

  @Column("varchar", { name: "Warehouse", length: 50, default: () => "''" })
  warehouse: string;

  @Column("decimal", {
    name: "Amount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  amount: number;

  @Column("varchar", {
    name: "AdjustAmountReason",
    length: 50,
    default: () => "''",
  })
  adjustAmountReason: string;
}
