import { Column, Entity, Index } from "typeorm";

@Index("PK__ErrorRep__4B913AC793FD7E3F", ["flowKey"], { unique: true })
@Entity("ErrorReport", { schema: "dbo" })
export class ErrorReport {
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

  @Column("nvarchar", { name: "ApplyTime", length: 20 })
  applyTime: string;

  @Column("nvarchar", { name: "DeptId", length: 50 })
  deptId: string;

  @Column("nvarchar", { name: "ErrorType", length: 50 })
  errorType: string;

  @Column("nvarchar", { name: "ProgramCode", length: 50 })
  programCode: string;

  @Column("nvarchar", { name: "SrcCode", length: 50 })
  srcCode: string;

  @Column("nvarchar", { name: "DocUrl", length: 100 })
  docUrl: string;

  @Column("ntext", { name: "Description" })
  description: string;

  @Column("ntext", { name: "Suggest" })
  suggest: string;

  @Column("ntext", { name: "VendorResponse" })
  vendorResponse: string;

  @Column("ntext", { name: "SponsorResponse" })
  sponsorResponse: string;
}
