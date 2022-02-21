import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_OrderNo_53D770D6", ["orderNo"], {})
@Index("_WA_Sys_ProductCode_53D770D6", ["productCode"], {})
@Index("_WA_Sys_ProductName_53D770D6", ["productName"], {})
@Index("_WA_Sys_PurchasePrice_53D770D6", ["purchasePrice"], {})
@Index("_WA_Sys_PurchaseQty_53D770D6", ["purchaseQty"], {})
@Index("_WA_Sys_PurchaseReason_53D770D6", ["purchaseReason"], {})
@Index("_WA_Sys_Seq_no_53D770D6", ["seqNo"], {})
@Index("PK__Purchase__793933C2B095D60D", ["flowKey", "seqNo"], { unique: true })
@Entity("Purchase_detail", { schema: "dbo" })
export class PurchaseDetail {
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

  @Column("decimal", {
    name: "PurchaseQty",
    precision: 10,
    scale: 2,
    default: () => "(0)",
  })
  purchaseQty: number;

  @Column("varchar", { name: "PurchaseUnit", length: 10, default: () => "''" })
  purchaseUnit: string;

  @Column("decimal", {
    name: "PurchasePrice",
    precision: 18,
    scale: 6,
    default: () => "(0)",
  })
  purchasePrice: number;

  @Column("decimal", {
    name: "PurchaseAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  purchaseAmount: number;

  @Column("varchar", { name: "OrderNo", length: 50, default: () => "''" })
  orderNo: string;

  @Column("int", { name: "OrderSeqNo", default: () => "(0)" })
  orderSeqNo: number;

  @Column("varchar", { name: "PrepaidDate", length: 10, default: () => "''" })
  prepaidDate: string;

  @Column("varchar", { name: "PreflightDate", length: 10, default: () => "''" })
  preflightDate: string;

  @Column("varchar", { name: "Warehouse", length: 50, default: () => "''" })
  warehouse: string;

  @Column("varchar", {
    name: "PurchaseReason",
    length: 50,
    default: () => "''",
  })
  purchaseReason: string;

  @Column("varchar", { name: "Status", length: 50, default: () => "''" })
  status: string;
}
