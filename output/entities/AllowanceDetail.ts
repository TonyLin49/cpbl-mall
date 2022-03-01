import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_InvoiceType_68DD7AB4", ["invoiceType"], {})
@Index("_WA_Sys_ProductName_68DD7AB4", ["productName"], {})
@Index("_WA_Sys_Seq_no_68DD7AB4", ["seqNo"], {})
@Index("PK__Allowanc__793933C232E66378", ["flowKey", "seqNo"], { unique: true })
@Entity("Allowance_detail", { schema: "dbo" })
export class AllowanceDetail {
  @Column("varchar", {
    primary: true,
    name: "FlowKey",
    length: 50,
    default: () => "''",
  })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no", default: () => "(0)" })
  seqNo: number;

  @Column("varchar", { name: "InvoiceNo", length: 20, default: () => "''" })
  invoiceNo: string;

  @Column("varchar", { name: "InvoiceDate", length: 10, default: () => "''" })
  invoiceDate: string;

  @Column("varchar", { name: "InvoiceType", length: 20, default: () => "''" })
  invoiceType: string;

  @Column("decimal", {
    name: "InvoiceSeqNo",
    precision: 10,
    scale: 0,
    default: () => "(0)",
  })
  invoiceSeqNo: number;

  @Column("char", { name: "EnterBySelf", length: 1, default: () => "' '" })
  enterBySelf: string;

  @Column("nvarchar", { name: "ProductName", length: 100, default: () => "''" })
  productName: string;

  @Column("decimal", {
    name: "Qty",
    precision: 18,
    scale: 4,
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

  @Column("decimal", {
    name: "Tax",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  tax: number;

  @Column("varchar", { name: "TaxCode", length: 10, default: () => "''" })
  taxCode: string;

  @Column("char", { name: "IsManualFlag", length: 1, default: () => "' '" })
  isManualFlag: string;
}
