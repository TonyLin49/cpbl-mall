import { Column, Entity, Index } from "typeorm";

@Index("PK__ReserveF__4B913AC7CA8A1B01", ["flowKey"], { unique: true })
@Entity("ReserveFunds", { schema: "dbo" })
export class ReserveFunds {
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

  @Column("nvarchar", { name: "ApplicantName", length: 50 })
  applicantName: string;

  @Column("nvarchar", { name: "ProvisionDate", length: 10 })
  provisionDate: string;

  @Column("nvarchar", { name: "BudgetYear", length: 50 })
  budgetYear: string;

  @Column("nvarchar", { name: "AreaCode", length: 50 })
  areaCode: string;

  @Column("nvarchar", { name: "ReserveType", length: 50 })
  reserveType: string;

  @Column("nvarchar", { name: "Names", length: 100 })
  names: string;

  @Column("int", { name: "Amount" })
  amount: number;

  @Column("ntext", { name: "Memo" })
  memo: string;
}
