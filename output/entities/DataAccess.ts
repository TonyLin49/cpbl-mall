import { Column, Entity, Index } from "typeorm";

@Index("PK__DataAcce__4B913AC7E467BC60", ["flowKey"], { unique: true })
@Entity("DataAccess", { schema: "dbo" })
export class DataAccess {
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

  @Column("nvarchar", { name: "AccessType", length: 20 })
  accessType: string;

  @Column("ntext", { name: "FieldsNames" })
  fieldsNames: string;

  @Column("nvarchar", { name: "AccessTable", length: 50 })
  accessTable: string;

  @Column("ntext", { name: "JoinTable" })
  joinTable: string;

  @Column("ntext", { name: "ConditionText" })
  conditionText: string;

  @Column("nvarchar", { name: "GroupFields", length: 200 })
  groupFields: string;

  @Column("nvarchar", { name: "OrderFields", length: 200 })
  orderFields: string;
}
