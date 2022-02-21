import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Applicant_6AEFE058", ["applicant"], {})
@Index("_WA_Sys_Code_6AEFE058", ["code"], {})
@Index("_WA_Sys_CreateDept_6AEFE058", ["createDept"], {})
@Index("_WA_Sys_NotAccBalance_6AEFE058", ["notAccBalance"], {})
@Index("_WA_Sys_SysNo_6AEFE058", ["sysNo"], {})
@Index("_WA_Sys_VoucherDate_6AEFE058", ["voucherDate"], {})
@Index("_WA_Sys_VoucherNo_6AEFE058", ["voucherNo"], {})
@Index("_WA_Sys_VoucherType_6AEFE058", ["voucherType"], {})
@Index("PK__AccVouch__4B913AC7FF1FA6B8", ["flowKey"], { unique: true })
@Entity("AccVoucher", { schema: "dbo" })
export class AccVoucher {
  @Column("varchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("varchar", { name: "SysNo", length: 50 })
  sysNo: string;

  @Column("varchar", { name: "Code", length: 50 })
  code: string;

  @Column("varchar", { name: "CreateDept", length: 50 })
  createDept: string;

  @Column("varchar", { name: "Applicant", length: 50 })
  applicant: string;

  @Column("varchar", { name: "VoucherDate", length: 50 })
  voucherDate: string;

  @Column("varchar", { name: "VoucherType", length: 50 })
  voucherType: string;

  @Column("ntext", { name: "Summary" })
  summary: string;

  @Column("varchar", { name: "VoucherNo", length: 50 })
  voucherNo: string;

  @Column("varchar", { name: "SrcFlowKey", length: 50 })
  srcFlowKey: string;

  @Column("char", { name: "NotAccBalance", length: 1, default: () => "' '" })
  notAccBalance: string;
}
