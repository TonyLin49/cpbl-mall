import { Column, Entity, Index } from "typeorm";

@Index("PK__IssueDoc__4B913AC75F7EAAFF", ["flowKey"], { unique: true })
@Entity("IssueDocument", { schema: "dbo" })
export class IssueDocument {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("nvarchar", { name: "SysNo", length: 50 })
  sysNo: string;

  @Column("nvarchar", { name: "Code", length: 50 })
  code: string;

  @Column("nvarchar", { name: "CreateDept", length: 50 })
  createDept: string;

  @Column("nvarchar", { name: "Applicant", length: 50 })
  applicant: string;

  @Column("nvarchar", { name: "IssueDept", length: 50 })
  issueDept: string;

  @Column("nvarchar", { name: "Contact", length: 50 })
  contact: string;

  @Column("nvarchar", { name: "Tel", length: 50 })
  tel: string;

  @Column("nvarchar", { name: "IssueDate", length: 10 })
  issueDate: string;

  @Column("nvarchar", { name: "IssueType", length: 50 })
  issueType: string;

  @Column("nvarchar", { name: "IssueNo", length: 50 })
  issueNo: string;

  @Column("nvarchar", { name: "Addressee", length: 100 })
  addressee: string;

  @Column("nvarchar", { name: "Address", length: 100 })
  address: string;

  @Column("nvarchar", { name: "Subject", length: 500 })
  subject: string;

  @Column("nvarchar", { name: "Explanation", length: 500 })
  explanation: string;

  @Column("nvarchar", { name: "ToDo", length: 500 })
  toDo: string;

  @Column("nvarchar", { name: "Original", length: 100 })
  original: string;

  @Column("nvarchar", { name: "Duplicate", length: 100 })
  duplicate: string;

  @Column("nchar", { name: "IsSeal", length: 1 })
  isSeal: string;

  @Column("nchar", { name: "IsShowToDo", length: 1 })
  isShowToDo: string;
}
