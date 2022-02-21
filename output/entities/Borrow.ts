import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Amount_7F60ED59", ["amount"], {})
@Index("_WA_Sys_Applicant_7F60ED59", ["applicant"], {})
@Index("_WA_Sys_ApplyDate_7F60ED59", ["applyDate"], {})
@Index("_WA_Sys_BalanceFlag_7F60ED59", ["balanceFlag"], {})
@Index("_WA_Sys_Code_7F60ED59", ["code"], {})
@Index("_WA_Sys_CreateDept_7F60ED59", ["createDept"], {})
@Index("_WA_Sys_SysNo_7F60ED59", ["sysNo"], {})
@Index("PK__Borrow__4B913AC722DB9506", ["flowKey"], { unique: true })
@Entity("Borrow", { schema: "dbo" })
export class Borrow {
  @Column("nvarchar", {
    primary: true,
    name: "FlowKey",
    length: 50,
    default: () => "''",
  })
  flowKey: string;

  @Column("nvarchar", { name: "SysNo", length: 50 })
  sysNo: string;

  @Column("nvarchar", { name: "Code", length: 50 })
  code: string;

  @Column("nvarchar", { name: "CreateDept", length: 50 })
  createDept: string;

  @Column("nvarchar", { name: "Applicant", length: 50 })
  applicant: string;

  @Column("nvarchar", { name: "Company", length: 50 })
  company: string;

  @Column("nvarchar", { name: "ApplyDate", length: 10 })
  applyDate: string;

  @Column("decimal", {
    name: "Amount",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  amount: number | null;

  @Column("nvarchar", { name: "Reason", length: 500, default: () => "''" })
  reason: string;

  @Column("nvarchar", { name: "Memo", length: 500, default: () => "''" })
  memo: string;

  @Column("char", { name: "BalanceFlag", nullable: true, length: 1 })
  balanceFlag: string | null;
}
