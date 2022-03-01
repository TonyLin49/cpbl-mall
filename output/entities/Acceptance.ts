import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Applicant_0EF836A4", ["applicant"], {})
@Index("_WA_Sys_Code_0EF836A4", ["code"], {})
@Index("_WA_Sys_CreateDept_0EF836A4", ["createDept"], {})
@Index("_WA_Sys_EnterDate_0EF836A4", ["enterDate"], {})
@Index("_WA_Sys_PurchaseNo_0EF836A4", ["purchaseNo"], {})
@Index("_WA_Sys_SysNo_0EF836A4", ["sysNo"], {})
@Index("_WA_Sys_Vendor_0EF836A4", ["vendor"], {})
@Index("PK__Acceptan__4B913AC7F9EAE63E", ["flowKey"], { unique: true })
@Entity("Acceptance", { schema: "dbo" })
export class Acceptance {
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

  @Column("decimal", {
    name: "TotalAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  totalAmount: number;
}
