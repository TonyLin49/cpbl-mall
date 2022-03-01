import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Amount_39237A9A", ["amount"], {})
@Index("_WA_Sys_InvoiceDate_39237A9A", ["invoiceDate"], {})
@Index("_WA_Sys_InvoiceNo_39237A9A", ["invoiceNo"], {})
@Index("_WA_Sys_InvoiceType_39237A9A", ["invoiceType"], {})
@Index("_WA_Sys_Seq_no_39237A9A", ["seqNo"], {})
@Index("_WA_Sys_Tax_39237A9A", ["tax"], {})
@Index("_WA_Sys_TaxCode_39237A9A", ["taxCode"], {})
@Index("_WA_Sys_VatNo_39237A9A", ["vatNo"], {})
@Index("_WA_Sys_WithoutDeduct_39237A9A", ["withoutDeduct"], {})
@Index("PK__VoucherP__793933C2EC6EEFD3", ["flowKey", "seqNo"], { unique: true })
@Entity("VoucherPayment_detail", { schema: "dbo" })
export class VoucherPaymentDetail {
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

  @Column("varchar", { name: "DeductCode", length: 10, default: () => "''" })
  deductCode: string;

  @Column("varchar", { name: "InvoiceType", length: 50, default: () => "''" })
  invoiceType: string;

  @Column("varchar", { name: "VatNo", length: 20, default: () => "''" })
  vatNo: string;

  @Column("decimal", {
    name: "Amount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  amount: number;

  @Column("varchar", { name: "TaxCode", length: 50, default: () => "''" })
  taxCode: string;

  @Column("decimal", {
    name: "Tax",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  tax: number;

  @Column("char", { name: "WithoutDeduct", length: 1, default: () => "' '" })
  withoutDeduct: string;

  @Column("char", { name: "IsManualFlag", length: 1, default: () => "''" })
  isManualFlag: string;
}
