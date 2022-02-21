import { Column, Entity, Index } from "typeorm";

@Index("PK__Acceptan__4B913AC7CCB1839C", ["flowKey"], { unique: true })
@Entity("AcceptanceReturn", { schema: "dbo" })
export class AcceptanceReturn {
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

  @Column("varchar", { name: "EnterDate", length: 10, default: () => "''" })
  enterDate: string;

  @Column("varchar", { name: "Vendor", length: 50, default: () => "''" })
  vendor: string;

  @Column("varchar", { name: "InvoiceNo", length: 20, default: () => "''" })
  invoiceNo: string;

  @Column("nvarchar", { name: "Status", length: 50, default: () => "''" })
  status: string;

  @Column("varchar", { name: "PurchaseNo", length: 50, default: () => "''" })
  purchaseNo: string;

  @Column("nvarchar", { name: "Summary", length: 500, default: () => "''" })
  summary: string;
}
