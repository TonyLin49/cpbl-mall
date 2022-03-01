import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Code_20C1E124", ["code"], {})
@Index("_WA_Sys_CreateDept_20C1E124", ["createDept"], {})
@Index("_WA_Sys_IsGeneralLedger_20C1E124", ["isGeneralLedger"], {})
@Index("_WA_Sys_MemoDate_20C1E124", ["memoDate"], {})
@Index("_WA_Sys_Payee_20C1E124", ["payee"], {})
@Index("_WA_Sys_PaymentDate_20C1E124", ["paymentDate"], {})
@Index("_WA_Sys_PaymentReport_20C1E124", ["paymentReport"], {})
@Index("_WA_Sys_PayType_20C1E124", ["payType"], {})
@Index("_WA_Sys_SysNo_20C1E124", ["sysNo"], {})
@Index("PK__PaymentM__4B913AC7DD82512C", ["flowKey"], { unique: true })
@Entity("PaymentMemo", { schema: "dbo" })
export class PaymentMemo {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("nvarchar", { name: "SysNo", length: 50 })
  sysNo: string;

  @Column("nvarchar", { name: "Code", length: 50 })
  code: string;

  @Column("nvarchar", { name: "Applicant", length: 50 })
  applicant: string;

  @Column("nvarchar", { name: "CreateDept", length: 50 })
  createDept: string;

  @Column("nvarchar", { name: "Payee", length: 50 })
  payee: string;

  @Column("nvarchar", { name: "PaymentDate", length: 10 })
  paymentDate: string;

  @Column("nvarchar", { name: "MemoDate", length: 10 })
  memoDate: string;

  @Column("decimal", { name: "Amount", precision: 18, scale: 0 })
  amount: number;

  @Column("nvarchar", { name: "PayType", length: 50 })
  payType: string;

  @Column("nvarchar", { name: "PaymentReport", length: 50 })
  paymentReport: string;

  @Column("ntext", { name: "Memo" })
  memo: string;

  @Column("char", { name: "IsGeneralLedger", length: 1 })
  isGeneralLedger: string;
}
