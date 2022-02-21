import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Applicant_6501FCD8", ["applicant"], {})
@Index("_WA_Sys_Code_6501FCD8", ["code"], {})
@Index("_WA_Sys_CreateDept_6501FCD8", ["createDept"], {})
@Index("_WA_Sys_EnterDate_6501FCD8", ["enterDate"], {})
@Index("_WA_Sys_Memo_6501FCD8", ["memo"], {})
@Index("_WA_Sys_Staff_6501FCD8", ["staff"], {})
@Index("_WA_Sys_SysNo_6501FCD8", ["sysNo"], {})
@Index("_WA_Sys_TaxCode_6501FCD8", ["taxCode"], {})
@Index("_WA_Sys_Vendor_6501FCD8", ["vendor"], {})
@Index("PK__Purchase__4B913AC7CAE3CBE4", ["flowKey"], { unique: true })
@Entity("Purchase", { schema: "dbo" })
export class Purchase {
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

  @Column("varchar", { name: "Staff", length: 50, default: () => "''" })
  staff: string;

  @Column("nvarchar", { name: "Vendor", length: 50, default: () => "''" })
  vendor: string;

  @Column("nvarchar", { name: "Customer", length: 50, default: () => "''" })
  customer: string;

  @Column("varchar", {
    name: "ShippingMethod",
    length: 50,
    default: () => "''",
  })
  shippingMethod: string;

  @Column("varchar", {
    name: "TradingConditions",
    length: 50,
    default: () => "''",
  })
  tradingConditions: string;

  @Column("varchar", { name: "Area", length: 50, default: () => "''" })
  area: string;

  @Column("varchar", { name: "PaymentType", length: 50, default: () => "''" })
  paymentType: string;

  @Column("varchar", { name: "TaxCode", length: 50, default: () => "''" })
  taxCode: string;

  @Column("int", { name: "UpperLimit", default: () => "(0)" })
  upperLimit: number;

  @Column("int", { name: "LowerLimit", default: () => "(0)" })
  lowerLimit: number;

  @Column("varchar", { name: "Warehouse", length: 50, default: () => "''" })
  warehouse: string;

  @Column("varchar", { name: "Status", length: 50, default: () => "''" })
  status: string;

  @Column("nvarchar", { name: "Summary", length: 500, default: () => "''" })
  summary: string;

  @Column("varchar", { name: "Currency", length: 50, default: () => "''" })
  currency: string;

  @Column("decimal", {
    name: "TotalAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  totalAmount: number;

  @Column("nvarchar", {
    name: "VendorAddress",
    length: 100,
    default: () => "''",
  })
  vendorAddress: string;

  @Column("nvarchar", {
    name: "CustomerAddress",
    length: 100,
    default: () => "''",
  })
  customerAddress: string;

  @Column("nvarchar", { name: "Memo", length: 200, default: () => "''" })
  memo: string;
}
