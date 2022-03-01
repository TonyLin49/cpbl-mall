import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_BatchNo_38845C1C", ["batchNo"], {})
@Index("_WA_Sys_NonStockItems_38845C1C", ["nonStockItems"], {})
@Index("_WA_Sys_OrderNo_38845C1C", ["orderNo"], {})
@Index("_WA_Sys_OrderSeqNo_38845C1C", ["orderSeqNo"], {})
@Index("_WA_Sys_ProductCode_38845C1C", ["productCode"], {})
@Index("_WA_Sys_ProductName_38845C1C", ["productName"], {})
@Index("_WA_Sys_Seq_no_38845C1C", ["seqNo"], {})
@Index("_WA_Sys_Warehouse_38845C1C", ["warehouse"], {})
@Index("PK__Shipped___793933C2E8D3539C", ["flowKey", "seqNo"], { unique: true })
@Entity("Shipped_detail", { schema: "dbo" })
export class ShippedDetail {
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

  @Column("varchar", { name: "BatchNo", length: 50, default: () => "''" })
  batchNo: string;

  @Column("varchar", { name: "Warehouse", length: 50, default: () => "''" })
  warehouse: string;

  @Column("varchar", { name: "ReasonCode", length: 50, default: () => "''" })
  reasonCode: string;

  @Column("nvarchar", { name: "Memo", length: 200, default: () => "''" })
  memo: string;

  @Column("varchar", { name: "ShippingDate", length: 10, default: () => "''" })
  shippingDate: string;

  @Column("nvarchar", { name: "Status", length: 50, default: () => "''" })
  status: string;

  @Column("decimal", {
    name: "Qty",
    precision: 10,
    scale: 2,
    default: () => "(0)",
  })
  qty: number;

  @Column("varchar", { name: "Unit", length: 10, default: () => "''" })
  unit: string;

  @Column("decimal", {
    name: "Price",
    precision: 18,
    scale: 6,
    default: () => "(0)",
  })
  price: number;

  @Column("decimal", {
    name: "SalePrice",
    precision: 18,
    scale: 6,
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

  @Column("varchar", { name: "OrderNo", length: 50, default: () => "''" })
  orderNo: string;

  @Column("int", { name: "OrderSeqNo", default: () => "(0)" })
  orderSeqNo: number;

  @Column("char", { name: "IsManualFlag", length: 1, default: () => "''" })
  isManualFlag: string;

  @Column("decimal", {
    name: "SalePriceTax",
    precision: 18,
    scale: 4,
    default: () => "(0)",
  })
  salePriceTax: number;

  @Column("char", { name: "IsDepositItem", length: 1, default: () => "''" })
  isDepositItem: string;

  @Column("decimal", {
    name: "Discount",
    precision: 18,
    scale: 4,
    default: () => "(0)",
  })
  discount: number;
}
