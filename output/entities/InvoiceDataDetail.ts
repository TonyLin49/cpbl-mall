import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_ProductCode_375B2DB9", ["productCode"], {})
@Index("_WA_Sys_ProductName_375B2DB9", ["productName"], {})
@Index("_WA_Sys_Seq_no_375B2DB9", ["seqNo"], {})
@Index("PK__InvoiceD__793933C2DB019118", ["flowKey", "seqNo"], { unique: true })
@Entity("InvoiceData_detail", { schema: "dbo" })
export class InvoiceDataDetail {
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

  @Column("nvarchar", { name: "ProductName", length: 200, default: () => "''" })
  productName: string;

  @Column("varchar", { name: "Unit", length: 10, default: () => "''" })
  unit: string;

  @Column("decimal", {
    name: "Qty",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  qty: number;

  @Column("decimal", {
    name: "Price",
    precision: 18,
    scale: 4,
    default: () => "(0)",
  })
  price: number;

  @Column("decimal", {
    name: "Amount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  amount: number;

  @Column("varchar", { name: "TaxCode", length: 10, default: () => "'3'" })
  taxCode: string;

  @Column("nvarchar", { name: "Remark", length: 50, default: () => "''" })
  remark: string;
}
