import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Code_36BC0F3B", ["code"], {})
@Index("_WA_Sys_DeptId_36BC0F3B", ["deptId"], {})
@Index("_WA_Sys_Disabled_36BC0F3B", ["disabled"], {})
@Index("_WA_Sys_Email_36BC0F3B", ["email"], {})
@Index("_WA_Sys_EmpId_36BC0F3B", ["empId"], {})
@Index("_WA_Sys_LaborPensionDegree_36BC0F3B", ["laborPensionDegree"], {})
@Index("_WA_Sys_LeavesDate_36BC0F3B", ["leavesDate"], {})
@Index("_WA_Sys_OnBoardDate_36BC0F3B", ["onBoardDate"], {})
@Index("_WA_Sys_RemittanceAccount_36BC0F3B", ["remittanceAccount"], {})
@Index("_WA_Sys_SysNo_36BC0F3B", ["sysNo"], {})
@Index("PK__SalaryIn__4B913AC7BE0033BE", ["flowKey"], { unique: true })
@Entity("SalaryInformation", { schema: "dbo" })
export class SalaryInformation {
  @Column("varchar", {
    primary: true,
    name: "FlowKey",
    length: 50,
    default: () => "''",
  })
  flowKey: string;

  @Column("varchar", { name: "SysNo", length: 50, default: () => "''" })
  sysNo: string;

  @Column("varchar", { name: "Code", length: 50, default: () => "''" })
  code: string;

  @Column("varchar", { name: "CreateDept", length: 50, default: () => "''" })
  createDept: string;

  @Column("varchar", { name: "Applicant", length: 50, default: () => "''" })
  applicant: string;

  @Column("varchar", { name: "DeptId", length: 50, default: () => "''" })
  deptId: string;

  @Column("varchar", { name: "EmpId", length: 50, default: () => "''" })
  empId: string;

  @Column("decimal", {
    name: "TheSalary",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  theSalary: number;

  @Column("decimal", {
    name: "FoodAllowance",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  foodAllowance: number;

  @Column("decimal", {
    name: "SalaryTax",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  salaryTax: number;

  @Column("varchar", { name: "LaborDegree", length: 50, default: () => "''" })
  laborDegree: string;

  @Column("varchar", {
    name: "LaborPensionDegree",
    length: 50,
    default: () => "''",
  })
  laborPensionDegree: string;

  @Column("decimal", {
    name: "LaborPensionSelfRate",
    precision: 18,
    scale: 6,
    default: () => "(0)",
  })
  laborPensionSelfRate: number;

  @Column("varchar", { name: "HealthDegree", length: 50, default: () => "''" })
  healthDegree: string;

  @Column("char", { name: "HasHandbook", length: 1, default: () => "' '" })
  hasHandbook: string;

  @Column("varchar", {
    name: "RemittanceAccount",
    length: 20,
    default: () => "''",
  })
  remittanceAccount: string;

  @Column("varchar", { name: "Email", length: 50, default: () => "''" })
  email: string;

  @Column("decimal", {
    name: "HealthRealMembers",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  healthRealMembers: number;

  @Column("char", {
    name: "NoNeedEmploymentInsurance",
    length: 1,
    default: () => "''",
  })
  noNeedEmploymentInsurance: string;

  @Column("decimal", {
    name: "FixHourAmount",
    precision: 18,
    scale: 4,
    default: () => "(0)",
  })
  fixHourAmount: number;

  @Column("char", { name: "Disabled", length: 1, default: () => "''" })
  disabled: string;

  @Column("nvarchar", { name: "JobTitle", length: 10, default: () => "''" })
  jobTitle: string;

  @Column("varchar", { name: "OnBoardDate", length: 10, default: () => "''" })
  onBoardDate: string;

  @Column("varchar", { name: "LeavesDate", length: 10, default: () => "''" })
  leavesDate: string;

  @Column("nvarchar", { name: "Memo", length: 500, default: () => "''" })
  memo: string;
}
