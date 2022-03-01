import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Accounts_03317E3D", ["accounts"], {})
@Index("_WA_Sys_AccYear_03317E3D", ["accYear"], {})
@Index("_WA_Sys_BudgetDept_03317E3D", ["budgetDept"], {})
@Index("_WA_Sys_Project_03317E3D", ["project"], {})
@Index("_WA_Sys_Seq_no_03317E3D", ["seqNo"], {})
@Index("PK__BudgetSh__793933C2EEED89C8", ["flowKey", "seqNo"], { unique: true })
@Entity("BudgetShare_detail", { schema: "dbo" })
export class BudgetShareDetail {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no" })
  seqNo: number;

  @Column("nvarchar", { name: "AccYear", length: 50 })
  accYear: string;

  @Column("nvarchar", { name: "BudgetDept", length: 50 })
  budgetDept: string;

  @Column("nvarchar", { name: "Project", length: 50 })
  project: string;

  @Column("nvarchar", { name: "Accounts", length: 50 })
  accounts: string;

  @Column("decimal", { name: "ShareAmount", precision: 18, scale: 0 })
  shareAmount: number;

  @Column("decimal", { name: "ShareTax", precision: 18, scale: 0 })
  shareTax: number;

  @Column("decimal", { name: "ShareNetAmount", precision: 18, scale: 0 })
  shareNetAmount: number;
}
