import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Applicant_00551192", ["applicant"], {})
@Index("_WA_Sys_BudgetType_00551192", ["budgetType"], {})
@Index("_WA_Sys_BudgetYear_00551192", ["budgetYear"], {})
@Index("_WA_Sys_Code_00551192", ["code"], {})
@Index("_WA_Sys_CreateDept_00551192", ["createDept"], {})
@Index("_WA_Sys_DeptId_00551192", ["deptId"], {})
@Index("_WA_Sys_Project_00551192", ["project"], {})
@Index("_WA_Sys_SysNo_00551192", ["sysNo"], {})
@Index("PK__Budget__4B913AC7C93E32E5", ["flowKey"], { unique: true })
@Entity("Budget", { schema: "dbo" })
export class Budget {
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

  @Column("nvarchar", { name: "DeptId", length: 50 })
  deptId: string;

  @Column("nvarchar", { name: "ApplicantName", length: 50 })
  applicantName: string;

  @Column("nvarchar", { name: "BudgetYear", length: 50 })
  budgetYear: string;

  @Column("nvarchar", { name: "Project", length: 50 })
  project: string;

  @Column("ntext", { name: "Description" })
  description: string;

  @Column("decimal", { name: "TotalAmount", precision: 18, scale: 0 })
  totalAmount: number;

  @Column("ntext", { name: "Summary" })
  summary: string;

  @Column("nvarchar", { name: "LoadFile", length: 100 })
  loadFile: string;

  @Column("nvarchar", { name: "BudgetType", length: 50 })
  budgetType: string;

  @Column("nvarchar", { name: "DescriptionUrl", length: 100 })
  descriptionUrl: string;

  @Column("nvarchar", { name: "BudgetControler", length: 50 })
  budgetControler: string;

  @Column("nvarchar", { name: "Leader", length: 50 })
  leader: string;

  @Column("nvarchar", { name: "DeptManager", length: 50 })
  deptManager: string;

  @Column("decimal", { name: "DetailRecords", precision: 18, scale: 0 })
  detailRecords: number;
}
