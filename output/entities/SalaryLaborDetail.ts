import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_EmpId_45C948A1", ["empId"], {})
@Index("_WA_Sys_HealthDegree_45C948A1", ["healthDegree"], {})
@Index("_WA_Sys_LaborDegree_45C948A1", ["laborDegree"], {})
@Index(
  "_WA_Sys_LaborPensionCompanyAmount_45C948A1",
  ["laborPensionCompanyAmount"],
  {}
)
@Index("_WA_Sys_LaborPensionDegree_45C948A1", ["laborPensionDegree"], {})
@Index("_WA_Sys_Seq_no_45C948A1", ["seqNo"], {})
@Index("PK__SalaryLa__793933C25B9F7AF7", ["flowKey", "seqNo"], { unique: true })
@Entity("SalaryLabor_detail", { schema: "dbo" })
export class SalaryLaborDetail {
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

  @Column("nvarchar", { name: "JobTitle", length: 50, default: () => "''" })
  jobTitle: string;

  @Column("varchar", { name: "OnBoardDate", length: 10, default: () => "''" })
  onBoardDate: string;

  @Column("varchar", { name: "LeavesDate", length: 10, default: () => "''" })
  leavesDate: string;

  @Column("varchar", { name: "LaborDegree", length: 50, default: () => "''" })
  laborDegree: string;

  @Column("decimal", {
    name: "LaborSelfAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  laborSelfAmount: number;

  @Column("decimal", {
    name: "LaborCompanyAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  laborCompanyAmount: number;

  @Column("varchar", {
    name: "LaborPensionDegree",
    length: 50,
    default: () => "''",
  })
  laborPensionDegree: string;

  @Column("decimal", {
    name: "LaborPensionSelfAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  laborPensionSelfAmount: number;

  @Column("decimal", {
    name: "LaborPensionCompanyAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  laborPensionCompanyAmount: number;

  @Column("varchar", { name: "HealthDegree", length: 50, default: () => "''" })
  healthDegree: string;

  @Column("decimal", {
    name: "HealthSelfAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  healthSelfAmount: number;

  @Column("decimal", {
    name: "HealthCompanyAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  healthCompanyAmount: number;

  @Column("decimal", {
    name: "SalaryTax",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  salaryTax: number;

  @Column("decimal", {
    name: "GroupInsurance",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  groupInsurance: number;

  @Column("nvarchar", { name: "Memo", length: 200, default: () => "''" })
  memo: string;
}
