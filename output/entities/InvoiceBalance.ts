import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Applicant_064DE20A", ["applicant"], {})
@Index("_WA_Sys_Code_064DE20A", ["code"], {})
@Index("_WA_Sys_CreateDept_064DE20A", ["createDept"], {})
@Index("_WA_Sys_CurrentMonth_064DE20A", ["currentMonth"], {})
@Index("_WA_Sys_CurrentYear_064DE20A", ["currentYear"], {})
@Index("_WA_Sys_SysNo_064DE20A", ["sysNo"], {})
@Index("PK__InvoiceB__4B913AC77545637E", ["flowKey"], { unique: true })
@Entity("InvoiceBalance", { schema: "dbo" })
export class InvoiceBalance {
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

  @Column("varchar", { name: "LastYear", length: 10, default: () => "''" })
  lastYear: string;

  @Column("varchar", { name: "LastMonth", length: 10, default: () => "''" })
  lastMonth: string;

  @Column("varchar", { name: "CurrentYear", length: 10, default: () => "''" })
  currentYear: string;

  @Column("varchar", { name: "CurrentMonth", length: 10, default: () => "''" })
  currentMonth: string;

  @Column("decimal", {
    name: "TotalSaleTax",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  totalSaleTax: number;

  @Column("decimal", {
    name: "ForeignLaborTax",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  foreignLaborTax: number;

  @Column("decimal", {
    name: "SpecialSaleTax",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  specialSaleTax: number;

  @Column("decimal", {
    name: "OtherShouldPayTax",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  otherShouldPayTax: number;

  @Column("decimal", {
    name: "TotalProceedsTax",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  totalProceedsTax: number;

  @Column("decimal", {
    name: "LastRemainingTaxCredit",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  lastRemainingTaxCredit: number;

  @Column("decimal", {
    name: "OtherShouldReturnTax",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  otherShouldReturnTax: number;

  @Column("decimal", {
    name: "NotDeduteRate",
    precision: 10,
    scale: 0,
    default: () => "(0)",
  })
  notDeduteRate: number;

  @Column("decimal", {
    name: "ShouldDeduteProceedsTax",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  shouldDeduteProceedsTax: number;

  @Column("decimal", {
    name: "ThisShouldPaidTax",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  thisShouldPaidTax: number;

  @Column("decimal", {
    name: "ThisRemainingTax",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  thisRemainingTax: number;

  @Column("decimal", {
    name: "ShouldReturnTotalTax",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  shouldReturnTotalTax: number;

  @Column("decimal", {
    name: "ThisShouldReturnTax",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  thisShouldReturnTax: number;

  @Column("decimal", {
    name: "ThisRemainingTaxCredit",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  thisRemainingTaxCredit: number;
}
