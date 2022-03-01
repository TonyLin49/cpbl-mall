import { Column, Entity, Index } from "typeorm";

@Index("PK__CardData__4B913AC7314F2D55", ["flowKey"], { unique: true })
@Entity("CardData", { schema: "dbo" })
export class CardData {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("nvarchar", { name: "SysNo", length: 50 })
  sysNo: string;

  @Column("nvarchar", { name: "Code", length: 50 })
  code: string;

  @Column("nvarchar", { name: "Applicant", length: 50 })
  applicant: string;

  @Column("nvarchar", { name: "CreateDept", length: 50 })
  createDept: string;

  @Column("nvarchar", { name: "PunchDate", length: 10 })
  punchDate: string;

  @Column("nvarchar", { name: "PunchTime", length: 10 })
  punchTime: string;

  @Column("nvarchar", { name: "EmpId", length: 50 })
  empId: string;

  @Column("nvarchar", { name: "SrcFlowKey", length: 50 })
  srcFlowKey: string;
}
