import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Applicant_7226EDCC", ["applicant"], {})
@Index("_WA_Sys_Code_7226EDCC", ["code"], {})
@Index("_WA_Sys_CreateDept_7226EDCC", ["createDept"], {})
@Index("_WA_Sys_EffectFlag_7226EDCC", ["effectFlag"], {})
@Index("_WA_Sys_SysNo_7226EDCC", ["sysNo"], {})
@Index("_WA_Sys_TackDate_7226EDCC", ["tackDate"], {})
@Index("_WA_Sys_Warehouse_7226EDCC", ["warehouse"], {})
@Index("PK__StockTac__4B913AC73EC672C5", ["flowKey"], { unique: true })
@Entity("StockTack", { schema: "dbo" })
export class StockTack {
  @Column("varchar", {
    primary: true,
    name: "FlowKey",
    length: 50,
    default: () => "''",
  })
  flowKey: string;

  @Column("varchar", { name: "SysNo", length: 50, default: () => "''" })
  sysNo: string;

  @Column("varchar", { name: "Code", length: 50, default: () => "''" })
  code: string;

  @Column("varchar", { name: "CreateDept", length: 50, default: () => "''" })
  createDept: string;

  @Column("varchar", { name: "Applicant", length: 50, default: () => "''" })
  applicant: string;

  @Column("varchar", { name: "Warehouse", length: 50, default: () => "''" })
  warehouse: string;

  @Column("varchar", { name: "TackDate", length: 10, default: () => "''" })
  tackDate: string;

  @Column("char", { name: "EffectFlag", length: 1, default: () => "' '" })
  effectFlag: string;

  @Column("nvarchar", { name: "Summary", length: 500, default: () => "''" })
  summary: string;
}
