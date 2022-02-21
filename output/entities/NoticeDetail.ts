import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_AuthorityType_1FCDBCEB", ["authorityType"], {})
@Index("_WA_Sys_TypeValue_1FCDBCEB", ["typeValue"], {})
@Index("PK__Notice_d__793933C235609556", ["flowKey", "seqNo"], { unique: true })
@Entity("Notice_detail", { schema: "dbo" })
export class NoticeDetail {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no" })
  seqNo: number;

  @Column("nvarchar", { name: "AuthorityType", length: 50 })
  authorityType: string;

  @Column("nvarchar", { name: "TypeValue", length: 50 })
  typeValue: string;
}
