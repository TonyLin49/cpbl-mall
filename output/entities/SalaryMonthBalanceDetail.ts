import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_DeptId_03C67B1A", ["deptId"], {})
@Index("_WA_Sys_EmpId_03C67B1A", ["empId"], {})
@Index("_WA_Sys_JobTitle_03C67B1A", ["jobTitle"], {})
@Index("_WA_Sys_RealSalary_03C67B1A", ["realSalary"], {})
@Index("_WA_Sys_Seq_no_03C67B1A", ["seqNo"], {})
@Index("PK__SalaryMo__793933C2DC5E16B6", ["flowKey", "seqNo"], { unique: true })
@Entity("SalaryMonthBalance_detail", { schema: "dbo" })
export class SalaryMonthBalanceDetail {
  @Column("varchar", {
    primary: true,
    name: "FlowKey",
    length: 50,
    default: () => "''",
  })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no", default: () => "(0)" })
  seqNo: number;

  @Column("varchar", { name: "DeptId", length: 50, default: () => "''" })
  deptId: string;

  @Column("varchar", { name: "EmpId", length: 50, default: () => "''" })
  empId: string;

  @Column("nvarchar", { name: "JobTitle", length: 10, default: () => "''" })
  jobTitle: string;

  @Column("decimal", {
    name: "TheSalary",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  theSalary: number;

  @Column("decimal", {
    name: "SalaryAddAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  salaryAddAmount: number;

  @Column("decimal", {
    name: "SalaryDeductAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  salaryDeductAmount: number;

  @Column("nvarchar", {
    name: "SalarySettleSummary",
    length: 200,
    default: () => "''",
  })
  salarySettleSummary: string;

  @Column("decimal", {
    name: "FoodAllowance",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  foodAllowance: number;

  @Column("decimal", {
    name: "MonthSalary",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  monthSalary: number;

  @Column("decimal", {
    name: "LaborSelfAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  laborSelfAmount: number;

  @Column("decimal", {
    name: "HealthSelfAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  healthSelfAmount: number;

  @Column("decimal", {
    name: "SalaryTax",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  salaryTax: number;

  @Column("decimal", {
    name: "GroupInsuranceAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  groupInsuranceAmount: number;

  @Column("decimal", {
    name: "RealSalary",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  realSalary: number;

  @Column("nvarchar", { name: "Memo", length: 200, default: () => "''" })
  memo: string;

  @Column("decimal", {
    name: "LaborPensionSelfAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  laborPensionSelfAmount: number;
}
