import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Applicant_34C8D9D1", ["applicant"], {})
@Index("_WA_Sys_Code_34C8D9D1", ["code"], {})
@Index("_WA_Sys_CreateDept_34C8D9D1", ["createDept"], {})
@Index("_WA_Sys_Memo_34C8D9D1", ["memo"], {})
@Index("_WA_Sys_ReceiptDate_34C8D9D1", ["receiptDate"], {})
@Index("_WA_Sys_SysNo_34C8D9D1", ["sysNo"], {})
@Index("PK__Receipt__4B913AC7910E8950", ["flowKey"], { unique: true })
@Entity("Receipt", { schema: "dbo" })
export class Receipt {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("nvarchar", { name: "SysNo", length: 50 })
  sysNo: string;

  @Column("nvarchar", { name: "Code", length: 50 })
  code: string;

  @Column("nvarchar", { name: "CreateDept", length: 50 })
  createDept: string;

  @Column("nvarchar", { name: "Applicant", length: 50 })
  applicant: string;

  @Column("nvarchar", { name: "ReceiptDate", length: 10 })
  receiptDate: string;

  @Column("nvarchar", { name: "Memo", length: 200 })
  memo: string;

  @Column("nvarchar", { name: "Customer", length: 50 })
  customer: string;

  @Column("decimal", { name: "TotalAmount", precision: 18, scale: 0 })
  totalAmount: number;
}
