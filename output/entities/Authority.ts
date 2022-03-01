import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_AuthorityType_7B905C75", ["authorityType"], {})
@Index("_WA_Sys_SysNo_7B905C75", ["sysNo"], {})
@Index("_WA_Sys_TypeValue_7B905C75", ["typeValue"], {})
@Index("PK__Authorit__4B913AC7B5A71534", ["flowKey"], { unique: true })
@Entity("Authority", { schema: "dbo" })
export class Authority {
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

  @Column("nvarchar", { name: "Names", length: 200 })
  names: string;

  @Column("nvarchar", { name: "AuthorityType", length: 50 })
  authorityType: string;

  @Column("nvarchar", { name: "TypeValue", length: 50 })
  typeValue: string;

  @Column("nvarchar", { name: "ExtendsValue", length: 200 })
  extendsValue: string;
}
