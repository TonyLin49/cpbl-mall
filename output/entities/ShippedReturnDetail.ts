import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_BatchNo_78BEDCC2", ["batchNo"], {})
@Index("_WA_Sys_NonStockItems_78BEDCC2", ["nonStockItems"], {})
@Index("_WA_Sys_OrderNo_78BEDCC2", ["orderNo"], {})
@Index("_WA_Sys_OrderSeqNo_78BEDCC2", ["orderSeqNo"], {})
@Index("_WA_Sys_ProductCode_78BEDCC2", ["productCode"], {})
@Index("_WA_Sys_ProductName_78BEDCC2", ["productName"], {})
@Index("_WA_Sys_Seq_no_78BEDCC2", ["seqNo"], {})
@Index("_WA_Sys_Warehouse_78BEDCC2", ["warehouse"], {})
@Index("PK__ShippedR__793933C2E5ADF63A", ["flowKey", "seqNo"], { unique: true })
@Entity("ShippedReturn_detail", { schema: "dbo" })
export class ShippedReturnDetail {
  @Column("varchar", {
    primary: true,
    name: "FlowKey",
    length: 50,
    default: () => "''",
  })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no", default: () => "(0)" })
  seqNo: number;

  @Column("varchar", { name: "OrderNo", length: 50, default: () => "''" })
  orderNo: string;

  @Column("int", { name: "OrderSeqNo", default: () => "(0)" })
  orderSeqNo: number;

  @Column("varchar", { name: "ShippedNo", length: 50, default: () => "''" })
  shippedNo: string;

  @Column("int", { name: "ShippedSeqNo", default: () => "(0)" })
  shippedSeqNo: number;

  @Column("char", { name: "NonStockItems", length: 1, default: () => "' '" })
  nonStockItems: string;

  @Column("varchar", { name: "ProductCode", length: 50, default: () => "''" })
  productCode: string;

  @Column("nvarchar", { name: "ProductName", length: 50, default: () => "''" })
  productName: string;

  @Column("varchar", { name: "BatchNo", length: 50, default: () => "''" })
  batchNo: string;

  @Column("varchar", { name: "Warehouse", length: 50, default: () => "''" })
  warehouse: string;

  @Column("varchar", { name: "ReasonCode", length: 50, default: () => "''" })
  reasonCode: string;

  @Column("nvarchar", { name: "Memo", length: 200, default: () => "''" })
  memo: string;

  @Column("varchar", { name: "ReturnDate", length: 10, default: () => "''" })
  returnDate: string;

  @Column("nvarchar", { name: "Status", length: 50, default: () => "''" })
  status: string;

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
    precision: 10,
    scale: 4,
    default: () => "(0)",
  })
  price: number;

  @Column("decimal", {
    name: "Discount",
    precision: 10,
    scale: 4,
    default: () => "(0)",
  })
  discount: number;

  @Column("decimal", {
    name: "SalePrice",
    precision: 10,
    scale: 4,
    default: () => "(0)",
  })
  salePrice: number;

  @Column("decimal", {
    name: "Amount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  amount: number;

  @Column("char", { name: "IsManualFlag", length: 1, default: () => "''" })
  isManualFlag: string;
}
