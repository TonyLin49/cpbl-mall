import { Column, Entity, Index } from "typeorm";

@Index("PK__IssueDoc__793933C292FBDBF5", ["flowKey", "seqNo"], { unique: true })
@Entity("IssueDocument_detail", { schema: "dbo" })
export class IssueDocumentDetail {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no" })
  seqNo: number;

  @Column("nvarchar", { name: "DocName", length: 50 })
  docName: string;

  @Column("nvarchar", { name: "DocUrl", length: 100 })
  docUrl: string;
}
