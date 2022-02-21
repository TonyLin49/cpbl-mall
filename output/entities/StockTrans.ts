import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Code_1D114BD1", ["code"], {})
@Index("_WA_Sys_SysNo_1D114BD1", ["sysNo"], {})
@Index("_WA_Sys_Warehouse_in_1D114BD1", ["warehouseIn"], {})
@Index("_WA_Sys_Warehouse_out_1D114BD1", ["warehouseOut"], {})
@Index("PK__StockTra__4B913AC78380A36E", ["flowKey"], { unique: true })
@Entity("StockTrans", { schema: "dbo" })
export class StockTrans {
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

  @Column("varchar", { name: "TransDate", length: 10, default: () => "''" })
  transDate: string;

  @Column("varchar", { name: "Warehouse_out", length: 50, default: () => "''" })
  warehouseOut: string;

  @Column("varchar", { name: "Warehouse_in", length: 50, default: () => "''" })
  warehouseIn: string;

  @Column("nvarchar", { name: "Memo", length: 200, default: () => "''" })
  memo: string;

  @Column("nvarchar", { name: "Status", length: 50, default: () => "''" })
  status: string;
}
