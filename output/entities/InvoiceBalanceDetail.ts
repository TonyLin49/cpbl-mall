import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Seq_no_7CC477D0", ["seqNo"], {})
@Index("_WA_Sys_TaxItem_7CC477D0", ["taxItem"], {})
@Index("PK__InvoiceB__793933C2FB79C3E3", ["flowKey", "seqNo"], { unique: true })
@Entity("InvoiceBalance_detail", { schema: "dbo" })
export class InvoiceBalanceDetail {
  @Column("varchar", {
    primary: true,
    name: "FlowKey",
    length: 50,
    default: () => "''",
  })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no", default: () => "(0)" })
  seqNo: number;

  @Column("varchar", { name: "TaxItem", length: 50, default: () => "''" })
  taxItem: string;

  @Column("varchar", { name: "DeductCode", length: 10, default: () => "''" })
  deductCode: string;

  @Column("decimal", {
    name: "SaleAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  saleAmount: number;

  @Column("decimal", {
    name: "SaleTax",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  saleTax: number;

  @Column("decimal", {
    name: "ProceedsAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  proceedsAmount: number;

  @Column("decimal", {
    name: "ProceedsTax",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  proceedsTax: number;
}
