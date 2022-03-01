import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Seq_no_21B6055D", ["seqNo"], {})
@Index("_WA_Sys_SrcFlowKey_21B6055D", ["srcFlowKey"], {})
@Index("PK__PaymentM__793933C21F34C410", ["flowKey", "seqNo"], { unique: true })
@Entity("PaymentMemo_detail", { schema: "dbo" })
export class PaymentMemoDetail {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no" })
  seqNo: number;

  @Column("nvarchar", { name: "SrcFlowKey", length: 50 })
  srcFlowKey: string;

  @Column("ntext", { name: "FlowName", nullable: true })
  flowName: string | null;

  @Column("nvarchar", { name: "InvoiceDate", length: 10 })
  invoiceDate: string;

  @Column("decimal", { name: "InvoiceNum", precision: 18, scale: 0 })
  invoiceNum: number;

  @Column("ntext", { name: "Memo", nullable: true })
  memo: string | null;

  @Column("decimal", { name: "Amount", precision: 18, scale: 0 })
  amount: number;

  @Column("decimal", { name: "SrcSeqNo", precision: 18, scale: 0 })
  srcSeqNo: number;
}
