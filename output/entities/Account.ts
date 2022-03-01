import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Applicant_76CBA758", ["applicant"], {})
@Index("_WA_Sys_Code_76CBA758", ["code"], {})
@Index("_WA_Sys_EffectDateFrom_76CBA758", ["effectDateFrom"], {})
@Index("_WA_Sys_EffectDateTo_76CBA758", ["effectDateTo"], {})
@Index("_WA_Sys_EmpId_76CBA758", ["empId"], {})
@Index("_WA_Sys_SysNo_76CBA758", ["sysNo"], {})
@Index("PK__Account__4B913AC7A5036137", ["flowKey"], { unique: true })
@Entity("Account", { schema: "dbo" })
export class Account {
  @Column("nvarchar", { primary: true, name: "flowKey", length: 50 })
  flowKey: string;

  @Column("nvarchar", { name: "password", length: 20 })
  password: string;

  @Column("nvarchar", { name: "empId", length: 20 })
  empId: string;

  @Column("nvarchar", { name: "language", length: 20 })
  language: string;

  @Column("nchar", { name: "openMenu", length: 1, default: () => "''" })
  openMenu: string;

  @Column("nvarchar", { name: "effectDateFrom", length: 20 })
  effectDateFrom: string;

  @Column("nvarchar", { name: "effectDateTo", length: 20 })
  effectDateTo: string;

  @Column("nvarchar", { name: "applicant", length: 50 })
  applicant: string;

  @Column("nvarchar", { name: "createDept", length: 50 })
  createDept: string;

  @Column("nvarchar", { name: "sysNo", length: 50 })
  sysNo: string;

  @Column("nvarchar", { name: "code", length: 50 })
  code: string;
}
