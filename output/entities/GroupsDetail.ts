import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Emp_id_164452B1", ["empId"], {})
@Index("_WA_Sys_Seq_no_164452B1", ["seqNo"], {})
@Index("PK__Groups_d__793933C2EE761700", ["flowKey", "seqNo"], { unique: true })
@Entity("Groups_detail", { schema: "dbo" })
export class GroupsDetail {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no" })
  seqNo: number;

  @Column("nvarchar", { name: "Emp_id", length: 50 })
  empId: string;
}
