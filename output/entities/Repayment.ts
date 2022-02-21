import { Column, Entity, Index } from "typeorm";

@Index("PK__Repaymen__4B913AC7EB77BDA1", ["flowKey"], { unique: true })
@Entity("Repayment", { schema: "dbo" })
export class Repayment {
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

  @Column("nvarchar", { name: "BorrowId", length: 50 })
  borrowId: string;

  @Column("nvarchar", { name: "SrcTable", length: 50 })
  srcTable: string;

  @Column("nvarchar", { name: "SrcKey", length: 50 })
  srcKey: string;

  @Column("int", { name: "ReturnAmount" })
  returnAmount: number;

  @Column("int", { name: "RepaymentAmount" })
  repaymentAmount: number;

  @Column("ntext", { name: "Reason" })
  reason: string;
}
