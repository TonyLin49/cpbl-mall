import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Birthday_25869641", ["birthday"], {})
@Index("_WA_Sys_Code_25869641", ["code"], {})
@Index("_WA_Sys_Names_25869641", ["names"], {})
@Index("_WA_Sys_Seq_no_25869641", ["seqNo"], {})
@Index("PK__PayrollS__793933C2A2F61BFF", ["flowKey", "seqNo"], { unique: true })
@Entity("PayrollSum_detail", { schema: "dbo" })
export class PayrollSumDetail {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no" })
  seqNo: number;

  @Column("nvarchar", { name: "WorkType", length: 50 })
  workType: string;

  @Column("nvarchar", { name: "Names", length: 50 })
  names: string;

  @Column("nvarchar", { name: "Code", length: 20 })
  code: string;

  @Column("nvarchar", { name: "Birthday", length: 10 })
  birthday: string;

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
}
