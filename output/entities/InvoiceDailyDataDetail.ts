import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_InvoiceDate_24D2692A", ["invoiceDate"], {})
@Index("_WA_Sys_Seq_no_24D2692A", ["seqNo"], {})
@Index("PK__InvoiceD__793933C2C5A21688", ["flowKey", "seqNo"], { unique: true })
@Entity("InvoiceDailyData_detail", { schema: "dbo" })
export class InvoiceDailyDataDetail {
  @Column("varchar", {
    primary: true,
    name: "FlowKey",
    length: 50,
    default: () => "''",
  })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no", default: () => "(0)" })
  seqNo: number;

  @Column("varchar", { name: "InvoiceDate", length: 10, default: () => "''" })
  invoiceDate: string;

  @Column("varchar", {
    name: "StartInvoiceNo",
    length: 10,
    default: () => "''",
  })
  startInvoiceNo: string;

  @Column("varchar", { name: "EndInvoiceNo", length: 10, default: () => "''" })
  endInvoiceNo: string;

  @Column("decimal", {
    name: "InvoiceAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  invoiceAmount: number;

  @Column("decimal", {
    name: "FreeAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  freeAmount: number;

  @Column("nvarchar", { name: "InvalidNo", length: 500, default: () => "''" })
  invalidNo: string;
}
