import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_ParentId_2C3393D0", ["parentId"], {})
@Index("_WA_Sys_TabName_2C3393D0", ["tabName"], {})
@Index("PK__PrgConfi__4B913AC78941DE0F", ["flowKey"], { unique: true })
@Entity("PrgConfigTabsBean", { schema: "dbo" })
export class PrgConfigTabsBean {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("nvarchar", { name: "ParentId", length: 50 })
  parentId: string;

  @Column("int", { name: "TabOrder" })
  tabOrder: number;

  @Column("nvarchar", { name: "TabName", length: 50 })
  tabName: string;

  @Column("nvarchar", { name: "LocalTabName", length: 50 })
  localTabName: string;

  @Column("nvarchar", { name: "DocUrl", length: 100 })
  docUrl: string;
}
