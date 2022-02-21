import { Column, Entity, Index } from "typeorm";

@Index("PK__TmpAccVo__4B913AC7BD56C01E", ["flowKey"], { unique: true })
@Entity("TmpAccVoucher", { schema: "dbo" })
export class TmpAccVoucher {
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

  @Column("nvarchar", { name: "Names", length: 200 })
  names: string;
}
