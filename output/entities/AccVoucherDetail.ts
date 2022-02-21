import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Accounts_6FB49575", ["accounts"], {})
@Index("_WA_Sys_Camount_6FB49575", ["camount"], {})
@Index("_WA_Sys_Damount_6FB49575", ["damount"], {})
@Index("_WA_Sys_DeptId_6FB49575", ["deptId"], {})
@Index("_WA_Sys_IsAccCode_6FB49575", ["isAccCode"], {})
@Index("_WA_Sys_Project_6FB49575", ["project"], {})
@Index("_WA_Sys_Seq_no_6FB49575", ["seqNo"], {})
@Index("PK__AccVouch__793933C260AD07CB", ["flowKey", "seqNo"], { unique: true })
@Entity("AccVoucher_detail", { schema: "dbo" })
export class AccVoucherDetail {
  @Column("varchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no" })
  seqNo: number;

  @Column("varchar", { name: "Accounts", length: 50 })
  accounts: string;

  @Column("ntext", { name: "Summary" })
  summary: string;

  @Column("varchar", { name: "DeptId", length: 50 })
  deptId: string;

  @Column("varchar", { name: "Project", length: 50 })
  project: string;

  @Column("char", { name: "IsAccCode", length: 1 })
  isAccCode: string;

  @Column("decimal", { name: "Damount", precision: 18, scale: 0 })
  damount: number;

  @Column("decimal", { name: "Camount", precision: 18, scale: 0 })
  camount: number;
}
