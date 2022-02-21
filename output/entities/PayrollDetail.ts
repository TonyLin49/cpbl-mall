import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Code_239E4DCF", ["code"], {})
@Index("_WA_Sys_HealthPersonal_239E4DCF", ["healthPersonal"], {})
@Index("_WA_Sys_Names_239E4DCF", ["names"], {})
@Index("_WA_Sys_Salary_239E4DCF", ["salary"], {})
@Index("_WA_Sys_Seq_no_239E4DCF", ["seqNo"], {})
@Index("_WA_Sys_WorkType_239E4DCF", ["workType"], {})
@Index("PK__Payroll___793933C28E17924D", ["flowKey", "seqNo"], { unique: true })
@Entity("Payroll_detail", { schema: "dbo" })
export class PayrollDetail {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no" })
  seqNo: number;

  @Column("nvarchar", { name: "Code", length: 20 })
  code: string;

  @Column("nvarchar", { name: "Names", length: 50 })
  names: string;

  @Column("nvarchar", { name: "Tel", length: 20 })
  tel: string;

  @Column("nvarchar", { name: "Address", length: 100 })
  address: string;

  @Column("nvarchar", { name: "WorkType", length: 50 })
  workType: string;

  @Column("decimal", { name: "Salary", precision: 18, scale: 0 })
  salary: number;

  @Column("decimal", { name: "LaborPersonal", precision: 18, scale: 0 })
  laborPersonal: number;

  @Column("decimal", { name: "HealthPersonal", precision: 18, scale: 0 })
  healthPersonal: number;

  @Column("decimal", { name: "NetAmount", precision: 18, scale: 0 })
  netAmount: number;

  @Column("decimal", { name: "Labor", precision: 18, scale: 0 })
  labor: number;

  @Column("decimal", { name: "Health", precision: 18, scale: 0 })
  health: number;

  @Column("decimal", { name: "LaborPension", precision: 18, scale: 0 })
  laborPension: number;

  @Column("char", { name: "IsManual", length: 1 })
  isManual: string;
}
