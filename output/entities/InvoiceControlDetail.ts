import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_EndNumber_216BEC9A", ["endNumber"], {})
@Index("_WA_Sys_Seq_no_216BEC9A", ["seqNo"], {})
@Index("_WA_Sys_StartNumber_216BEC9A", ["startNumber"], {})
@Index("PK__InvoiceC__793933C2CD879CCF", ["flowKey", "seqNo"], { unique: true })
@Entity("InvoiceControl_detail", { schema: "dbo" })
export class InvoiceControlDetail {
  @Column("varchar", {
    primary: true,
    name: "FlowKey",
    length: 50,
    default: () => "''",
  })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no", default: () => "(0)" })
  seqNo: number;

  @Column("int", { name: "InvoiceArea", default: () => "(0)" })
  invoiceArea: number;

  @Column("varchar", { name: "StartNumber", length: 10, default: () => "''" })
  startNumber: string;

  @Column("varchar", { name: "EndNumber", length: 10, default: () => "''" })
  endNumber: string;
}
