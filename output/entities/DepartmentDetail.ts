import { Column, Entity, Index } from "typeorm";

@Index("PK__Departme__793933C2D6C8BF5F", ["flowKey", "seqNo"], { unique: true })
@Entity("Department_detail", { schema: "dbo" })
export class DepartmentDetail {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no" })
  seqNo: number;

  @Column("nvarchar", { name: "Program", length: 50 })
  program: string;

  @Column("nvarchar", { name: "FlowId", length: 50 })
  flowId: string;

  @Column("nvarchar", { name: "GroupType", length: 50 })
  groupType: string;

  @Column("nvarchar", { name: "Memo", length: 100 })
  memo: string;
}
