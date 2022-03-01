import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_BorrowId_35BCFE0A", ["borrowId"], {})
@Index("_WA_Sys_CheckNo_35BCFE0A", ["checkNo"], {})
@Index("_WA_Sys_IsRepayment_35BCFE0A", ["isRepayment"], {})
@Index("_WA_Sys_OrderNo_35BCFE0A", ["orderNo"], {})
@Index("_WA_Sys_ReceiptType_35BCFE0A", ["receiptType"], {})
@Index("_WA_Sys_Seq_no_35BCFE0A", ["seqNo"], {})
@Index("PK__Receipt___793933C23D0DA6B5", ["flowKey", "seqNo"], { unique: true })
@Entity("Receipt_detail", { schema: "dbo" })
export class ReceiptDetail {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no" })
  seqNo: number;

  @Column("varchar", { name: "ReceiptType", length: 50 })
  receiptType: string;

  @Column("decimal", { name: "Amount", precision: 18, scale: 0 })
  amount: number;

  @Column("char", { name: "IsRepayment", length: 1 })
  isRepayment: string;

  @Column("varchar", { name: "BorrowId", length: 50 })
  borrowId: string;

  @Column("varchar", { name: "Bank", length: 50 })
  bank: string;

  @Column("varchar", { name: "CheckNo", length: 20 })
  checkNo: string;

  @Column("varchar", { name: "DueDate", length: 10 })
  dueDate: string;

  @Column("varchar", { name: "Accounts", length: 50 })
  accounts: string;

  @Column("varchar", { name: "OrderNo", length: 50, default: () => "''" })
  orderNo: string;
}
