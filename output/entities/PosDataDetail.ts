import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_BuyerEin_54D68207", ["buyerEin"], {})
@Index("_WA_Sys_InvoiceDate_54D68207", ["invoiceDate"], {})
@Index("_WA_Sys_InvoiceNo_54D68207", ["invoiceNo"], {})
@Index("_WA_Sys_InvoiceStatus_54D68207", ["invoiceStatus"], {})
@Index("_WA_Sys_Seq_no_54D68207", ["seqNo"], {})
@Index("_WA_Sys_TaxCode_54D68207", ["taxCode"], {})
@Index("PK__PosData___793933C279FA8214", ["flowKey", "seqNo"], { unique: true })
@Entity("PosData_detail", { schema: "dbo" })
export class PosDataDetail {
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

  @Column("varchar", { name: "BuyerEin", length: 10, default: () => "''" })
  buyerEin: string;

  @Column("nvarchar", { name: "Buyer", length: 50, default: () => "''" })
  buyer: string;

  @Column("varchar", { name: "SellerEin", length: 10, default: () => "''" })
  sellerEin: string;

  @Column("nvarchar", { name: "Seller", length: 50, default: () => "''" })
  seller: string;

  @Column("varchar", { name: "TaxCode", length: 50, default: () => "''" })
  taxCode: string;

  @Column("decimal", {
    name: "NetAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  netAmount: number;

  @Column("decimal", {
    name: "Tax",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  tax: number;

  @Column("decimal", {
    name: "InvoiceAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  invoiceAmount: number;

  @Column("varchar", { name: "FormatCode", length: 10, default: () => "''" })
  formatCode: string;

  @Column("nvarchar", {
    name: "InvoiceStatus",
    length: 50,
    default: () => "''",
  })
  invoiceStatus: string;

  @Column("varchar", { name: "UploadDate", length: 10, default: () => "''" })
  uploadDate: string;

  @Column("nvarchar", { name: "Memo", length: 200, default: () => "''" })
  memo: string;
}
