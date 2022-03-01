import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_AccYear_3592E0D8", ["accYear"], {})
@Index("_WA_Sys_Code_3592E0D8", ["code"], {})
@Index("_WA_Sys_Month_3592E0D8", ["month"], {})
@Index("_WA_Sys_SysNo_3592E0D8", ["sysNo"], {})
@Index("PK__SalaryLa__4B913AC7480C6EBA", ["flowKey"], { unique: true })
@Entity("SalaryLabor", { schema: "dbo" })
export class SalaryLabor {
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
    name: "LaborSelfTotalAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  laborSelfTotalAmount: number;

  @Column("decimal", {
    name: "LaborCompanyTotalAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  laborCompanyTotalAmount: number;

  @Column("decimal", {
    name: "LaborPensionSelfTotalAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  laborPensionSelfTotalAmount: number;

  @Column("decimal", {
    name: "LaborPensionCompanyTotalAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  laborPensionCompanyTotalAmount: number;

  @Column("decimal", {
    name: "HealthSelfTotalAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  healthSelfTotalAmount: number;

  @Column("decimal", {
    name: "HealthCompanyTotalAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  healthCompanyTotalAmount: number;

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
}
