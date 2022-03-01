import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Applicant_5E1FF51F", ["applicant"], {})
@Index("_WA_Sys_Code_5E1FF51F", ["code"], {})
@Index("_WA_Sys_Month_5E1FF51F", ["month"], {})
@Index("_WA_Sys_SysNo_5E1FF51F", ["sysNo"], {})
@Index("_WA_Sys_Year_5E1FF51F", ["year"], {})
@Index("PK__StockWei__4B913AC791E6C1A2", ["flowKey"], { unique: true })
@Entity("StockWeightedAverage", { schema: "dbo" })
export class StockWeightedAverage {
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

  @Column("varchar", { name: "Year", length: 10, default: () => "''" })
  year: string;

  @Column("varchar", { name: "Month", length: 10, default: () => "''" })
  month: string;

  @Column("nvarchar", { name: "Memo", length: 200, default: () => "''" })
  memo: string;
}
