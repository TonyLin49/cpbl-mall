import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_IsClose_719CDDE7", ["isClose"], {})
@Index("_WA_Sys_ParentId_719CDDE7", ["parentId"], {})
@Index("_WA_Sys_SrcKey_719CDDE7", ["srcKey"], {})
@Index("_WA_Sys_SrcTable_719CDDE7", ["srcTable"], {})
@Index("PK__AccVouch__4B913AC70AC67248", ["flowKey"], { unique: true })
@Entity("AccVoucherSrcDetail", { schema: "dbo" })
export class AccVoucherSrcDetail {
  @Column("varchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("varchar", { name: "ParentId", length: 50 })
  parentId: string;

  @Column("varchar", { name: "SrcTable", length: 50 })
  srcTable: string;

  @Column("varchar", { name: "SrcKey", length: 50 })
  srcKey: string;

  @Column("ntext", { name: "Summary" })
  summary: string;

  @Column("decimal", {
    name: "SrcAmount",
    precision: 18,
    scale: 0,
    default: () => "(0)",
  })
  srcAmount: number;

  @Column("char", { name: "IsClose", length: 1, default: () => "' '" })
  isClose: string;
}
