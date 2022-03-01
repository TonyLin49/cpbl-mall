import { Column, Entity, Index } from "typeorm";

@Index("PK__Requisti__4B913AC7A2A36B55", ["flowKey"], { unique: true })
@Entity("RequistionSquotation", { schema: "dbo" })
export class RequistionSquotation {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("nvarchar", { name: "ParentId", length: 50 })
  parentId: string;

  @Column("nvarchar", { name: "Vendor", length: 50 })
  vendor: string;

  @Column("nvarchar", { name: "QuoationDate", length: 10 })
  quoationDate: string;

  @Column("nvarchar", { name: "DocUrl", length: 100 })
  docUrl: string;

  @Column("ntext", { name: "Memo" })
  memo: string;

  @Column("nchar", { name: "Approved", length: 1 })
  approved: string;
}
