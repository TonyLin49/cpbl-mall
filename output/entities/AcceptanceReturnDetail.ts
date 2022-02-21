import { Column, Entity, Index } from "typeorm";

@Index("PK__Acceptan__793933C266732117", ["flowKey", "seqNo"], { unique: true })
@Entity("AcceptanceReturn_detail", { schema: "dbo" })
export class AcceptanceReturnDetail {
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

  @Column("varchar", { name: "PurchaseUnit", length: 10, default: () => "''" })
  purchaseUnit: string;

  @Column("decimal", {
    name: "PurchasePrice",
    precision: 10,
    scale: 4,
    default: () => "(0)",
  })
  purchasePrice: number;

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

  @Column("varchar", { name: "Warehouse", length: 50, default: () => "''" })
  warehouse: string;

  @Column("decimal", {
    name: "AcceptanceQty",
    precision: 10,
    scale: 2,
    default: () => "(0)",
  })
  acceptanceQty: number;

  @Column("float", { name: "TransRate", precision: 53, default: () => "(0)" })
  transRate: number;

  @Column("varchar", { name: "StockUnit", length: 10, default: () => "''" })
  stockUnit: string;

  @Column("decimal", {
    name: "StockQty",
    precision: 10,
    scale: 2,
    default: () => "(0)",
  })
  stockQty: number;

  @Column("varchar", { name: "BatchNo", length: 50, default: () => "''" })
  batchNo: string;

  @Column("varchar", { name: "ReasonCode", length: 50, default: () => "''" })
  reasonCode: string;
}
