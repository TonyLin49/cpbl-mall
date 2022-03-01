import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Applicant_44FF419A", ["applicant"], {})
@Index("_WA_Sys_Code_44FF419A", ["code"], {})
@Index("_WA_Sys_SrcSponsor_44FF419A", ["srcSponsor"], {})
@Index("_WA_Sys_SysNo_44FF419A", ["sysNo"], {})
@Index("PK__SponsorT__4B913AC7E107B3F6", ["flowKey"], { unique: true })
@Entity("SponsorTrans", { schema: "dbo" })
export class SponsorTrans {
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

  @Column("nvarchar", { name: "DeptId", length: 50 })
  deptId: string;

  @Column("nvarchar", { name: "SrcSponsor", length: 50 })
  srcSponsor: string;

  @Column("nvarchar", { name: "NewSponsor", length: 50 })
  newSponsor: string;

  @Column("nchar", { name: "WaitToSign", length: 1 })
  waitToSign: string;

  @Column("nchar", { name: "WaitToClose", length: 1 })
  waitToClose: string;

  @Column("nchar", { name: "WaitToPayGoodsApply", length: 1 })
  waitToPayGoodsApply: string;

  @Column("nchar", { name: "JobTrans", length: 1 })
  jobTrans: string;

  @Column("nvarchar", { name: "DateFrom", length: 10 })
  dateFrom: string;

  @Column("nvarchar", { name: "DateTo", length: 10 })
  dateTo: string;

  @Column("nvarchar", { name: "Memo", length: 100 })
  memo: string;
}
