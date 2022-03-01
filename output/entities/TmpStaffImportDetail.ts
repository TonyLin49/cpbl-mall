import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Names_4AB81AF0", ["names"], {})
@Index("_WA_Sys_Seq_no_4AB81AF0", ["seqNo"], {})
@Index("PK__TmpStaff__793933C2C9FDCADA", ["flowKey", "seqNo"], { unique: true })
@Entity("TmpStaffImport_detail", { schema: "dbo" })
export class TmpStaffImportDetail {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no" })
  seqNo: number;

  @Column("nvarchar", { name: "Code", length: 50 })
  code: string;

  @Column("nvarchar", { name: "Names", length: 50 })
  names: string;

  @Column("nvarchar", { name: "Birthday", length: 10 })
  birthday: string;

  @Column("nvarchar", { name: "Tel", length: 20 })
  tel: string;

  @Column("nvarchar", { name: "Address", length: 100 })
  address: string;

  @Column("nvarchar", { name: "AreaCode", length: 50 })
  areaCode: string;

  @Column("nvarchar", { name: "IdType", length: 50 })
  idType: string;
}
