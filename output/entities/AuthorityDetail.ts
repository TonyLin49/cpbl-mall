import { Column, Entity, Index } from "typeorm";

@Index("PK__Authorit__793933C278B9DA10", ["flowKey", "seqNo"], { unique: true })
@Entity("Authority_detail", { schema: "dbo" })
export class AuthorityDetail {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no" })
  seqNo: number;

  @Column("nvarchar", { name: "ProgramId", length: 50 })
  programId: string;

  @Column("nchar", { name: "AllowInsert", length: 1 })
  allowInsert: string;

  @Column("nchar", { name: "AllowUpdate", length: 1 })
  allowUpdate: string;

  @Column("nchar", { name: "AllowDelete", length: 1 })
  allowDelete: string;

  @Column("nvarchar", { name: "QueryAuthority", length: 50 })
  queryAuthority: string;

  @Column("nvarchar", { name: "UpdateAuthority", length: 50 })
  updateAuthority: string;

  @Column("nvarchar", { name: "DeleteAuthority", length: 50 })
  deleteAuthority: string;

  @Column("nvarchar", { name: "CanAccessDept", length: 100 })
  canAccessDept: string;

  @Column("nvarchar", { name: "GroupTypes", length: 100 })
  groupTypes: string;

  @Column("nchar", { name: "CanUse", length: 1 })
  canUse: string;

  @Column("nchar", { name: "CrossAuthority", length: 1 })
  crossAuthority: string;

  @Column("varchar", { name: "CanQueryInfo", length: 100, default: () => "''" })
  canQueryInfo: string;
}
