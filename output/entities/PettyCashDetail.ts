import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Amount_4589517F", ["amount"], {})
@Index("_WA_Sys_InvoiceDate_4589517F", ["invoiceDate"], {})
@Index("_WA_Sys_InvoiceNo_4589517F", ["invoiceNo"], {})
@Index("_WA_Sys_InvoiceType_4589517F", ["invoiceType"], {})
@Index("_WA_Sys_Seq_no_4589517F", ["seqNo"], {})
@Index("_WA_Sys_Tax_4589517F", ["tax"], {})
@Index("_WA_Sys_TaxCode_4589517F", ["taxCode"], {})
@Index("_WA_Sys_VatNo_4589517F", ["vatNo"], {})
@Index("_WA_Sys_WithoutDeduct_4589517F", ["withoutDeduct"], {})
@Index("PK__PettyCas__793933C22703C2F1", ["flowKey", "seqNo"], { unique: true })
@Entity("PettyCash_detail", { schema: "dbo" })
export class PettyCashDetail {
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
