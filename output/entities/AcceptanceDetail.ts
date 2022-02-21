import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_BatchNo_7CD98669", ["batchNo"], {})
@Index("_WA_Sys_ProductCode_7CD98669", ["productCode"], {})
@Index("_WA_Sys_PurchaseNo_7CD98669", ["purchaseNo"], {})
@Index("_WA_Sys_PurchasePrice_7CD98669", ["purchasePrice"], {})
@Index("_WA_Sys_PurchaseReason_7CD98669", ["purchaseReason"], {})
@Index("_WA_Sys_PurchaseSeqNo_7CD98669", ["purchaseSeqNo"], {})
@Index("_WA_Sys_Seq_no_7CD98669", ["seqNo"], {})
@Index("_WA_Sys_Warehouse_7CD98669", ["warehouse"], {})
@Index("PK__Acceptan__793933C2915F2FCD", ["flowKey", "seqNo"], { unique: true })
@Entity("Acceptance_detail", { schema: "dbo" })
export class AcceptanceDetail {
  @Column("varchar", {
    primary: true,
    name: "FlowKey",
    length: 50,
    default: () => "''",
  })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no", default: () => "(0)" })
  seqNo: number;

  @Column("varchar", { name: "PurchaseNo", length: 50, default: () => "''" })
  purchaseNo: string;

  @Column("int", { name: "PurchaseSeqNo", default: () => "(0)" })
  purchaseSeqNo: number;

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

  @Column("decimal", {
    name: "PendingQty",
    precision: 10,
    scale: 2,
    default: () => "(0)",
  })
  pendingQty: number;

  @Column("decimal", {
    name: "AcceptanceQty",
    precision: 10,
    scale: 2,
    default: () => "(0)",
  })
  acceptanceQty: number;

  @Column("varchar", { name: "PurchaseUnit", length: 10, default: () => "''" })
  purchaseUnit: string;

  @Column("decimal", {
    name: "PurchasePrice",
    precision: 18,
    scale: 6,
    default: () => "(0)",
  })
  purchasePrice: number;

  @Column("varchar", { name: "Warehouse", length: 50, default: () => "''" })
  warehouse: string;

  @Column("float", { name: "TransRate", precision: 53, default: () => "(0)" })
  transRate: number;

  @Column("decimal", {
    name: "StockQty",
    precision: 10,
    scale: 2,
    default: () => "(0)",
  })
  stockQty: number;

  @Column("varchar", { name: "StockUnit", length: 10, default: () => "''" })
  stockUnit: string;

  @Column("varchar", { name: "BatchNo", length: 50, default: () => "''" })
  batchNo: string;

  @Column("varchar", {
    name: "PurchaseReason",
    length: 50,
    default: () => "''",
  })
  purchaseReason: string;
}
