import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_AccYear_6FBF826D", ["accYear"], {})
@Index("_WA_Sys_Code_6FBF826D", ["code"], {})
@Index("_WA_Sys_Month_6FBF826D", ["month"], {})
@Index("_WA_Sys_SysNo_6FBF826D", ["sysNo"], {})
@Index("PK__SalaryMo__4B913AC7E1510DFA", ["flowKey"], { unique: true })
@Entity("SalaryMonthBalance", { schema: "dbo" })
export class SalaryMonthBalance {
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

  @Column("varchar", { name: "AccYear", length: 50, default: () => "''" })
  accYear: string;

  @Column("varchar", { name: "Month", length: 10, default: () => "''" })
  month: string;

  @Column("decimal", {
    name: "TheSalaryTotalAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  theSalaryTotalAmount: number;

  @Column("decimal", {
    name: "SalaryAddTotalAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  salaryAddTotalAmount: number;

  @Column("decimal", {
    name: "SalaryDeductTotalAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  salaryDeductTotalAmount: number;

  @Column("decimal", {
    name: "FoodAllowanceTotalAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  foodAllowanceTotalAmount: number;

  @Column("decimal", {
    name: "LaborSelfTotalAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  laborSelfTotalAmount: number;

  @Column("decimal", {
    name: "HealthSelfTotalAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  healthSelfTotalAmount: number;

  @Column("decimal", {
    name: "SalaryTaxTotalAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  salaryTaxTotalAmount: number;

  @Column("decimal", {
    name: "GroupInsuranceTotalAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  groupInsuranceTotalAmount: number;

  @Column("decimal", {
    name: "RealSalaryTotalAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  realSalaryTotalAmount: number;

  @Column("nvarchar", {
    name: "SalaryAddSummary",
    length: 500,
    default: () => "''",
  })
  salaryAddSummary: string;

  @Column("nvarchar", {
    name: "SalaryDeductSummary",
    length: 500,
    default: () => "''",
  })
  salaryDeductSummary: string;

  @Column("decimal", {
    name: "LaborPensionSelfTotalAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  laborPensionSelfTotalAmount: number;
}
