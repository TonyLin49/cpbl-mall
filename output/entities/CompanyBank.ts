import { Column, Entity, Index } from "typeorm";

@Index("PK__CompanyB__4B913AC7690844F0", ["flowKey"], { unique: true })
@Entity("CompanyBank", { schema: "dbo" })
export class CompanyBank {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("nvarchar", { name: "ParentId", length: 50 })
  parentId: string;

  @Column("nvarchar", { name: "BankNo", length: 10 })
  bankNo: string;

  @Column("nvarchar", { name: "BankAccount", length: 20 })
  bankAccount: string;

  @Column("int", { name: "MiniBalance" })
  miniBalance: number;

  @Column("nvarchar", { name: "Memo", length: 100 })
  memo: string;
}
