import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Accounts_2CBDA3B5", ["accounts"], {})
@Index("_WA_Sys_OffsetAmount_2CBDA3B5", ["offsetAmount"], {})
@Index("_WA_Sys_ParentDetailSeqNo_2CBDA3B5", ["parentDetailSeqNo"], {})
@Index("_WA_Sys_ParentId_2CBDA3B5", ["parentId"], {})
@Index("_WA_Sys_SrcAmount_2CBDA3B5", ["srcAmount"], {})
@Index("_WA_Sys_SrcKey_2CBDA3B5", ["srcKey"], {})
@Index("_WA_Sys_SrcSeqNo_2CBDA3B5", ["srcSeqNo"], {})
@Index("PK__AccVouch__4B913AC77BABE5F2", ["flowKey"], { unique: true })
@Entity("AccVoucherOffsetDetail", { schema: "dbo" })
export class AccVoucherOffsetDetail {
  @Column("varchar", {
    primary: true,
    name: "FlowKey",
    length: 50,
    default: () => "''",
  })
  flowKey: string;

  @Column("varchar", { name: "ParentId", length: 50, default: () => "''" })
  parentId: string;

  @Column("int", { name: "ParentDetailSeqNo", default: () => "(0)" })
  parentDetailSeqNo: number;

  @Column("varchar", { name: "SrcTable", length: 50, default: () => "''" })
  srcTable: string;

  @Column("varchar", { name: "SrcKey", length: 50, default: () => "''" })
  srcKey: string;

  @Column("int", { name: "SrcSeqNo", default: () => "(0)" })
  srcSeqNo: number;

  @Column("varchar", { name: "Accounts", length: 50, default: () => "''" })
  accounts: string;

  @Column("decimal", {
    name: "SrcAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  srcAmount: number;

  @Column("decimal", {
    name: "OffsetAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  offsetAmount: number;

  @Column("decimal", {
    name: "TotalOffsetAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  totalOffsetAmount: number;

  @Column("nvarchar", { name: "Summary", length: 500, default: () => "''" })
  summary: string;
}
