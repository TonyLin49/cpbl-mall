import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Applicant_335592AB", ["applicant"], {})
@Index("_WA_Sys_Code_335592AB", ["code"], {})
@Index("_WA_Sys_CreateDept_335592AB", ["createDept"], {})
@Index("_WA_Sys_DateFrom_335592AB", ["dateFrom"], {})
@Index("_WA_Sys_DateTo_335592AB", ["dateTo"], {})
@Index("_WA_Sys_InventoryType_335592AB", ["inventoryType"], {})
@Index("_WA_Sys_Names_335592AB", ["names"], {})
@Index("_WA_Sys_Specification_335592AB", ["specification"], {})
@Index("_WA_Sys_SysNo_335592AB", ["sysNo"], {})
@Index("PK__Product__4B913AC797BD4B38", ["flowKey"], { unique: true })
@Entity("Product", { schema: "dbo" })
export class Product {
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

  @Column("nvarchar", { name: "Names", length: 100, default: () => "''" })
  names: string;

  @Column("nvarchar", {
    name: "Specification",
    length: 200,
    default: () => "''",
  })
  specification: string;

  @Column("varchar", { name: "InventoryType", length: 50, default: () => "''" })
  inventoryType: string;

  @Column("varchar", { name: "Unit", length: 10, default: () => "''" })
  unit: string;

  @Column("int", { name: "Price", default: () => "(0)" })
  price: number;

  @Column("varchar", { name: "PurchaseUnit", length: 10, default: () => "''" })
  purchaseUnit: string;

  @Column("float", {
    name: "PurchaseRate",
    precision: 53,
    default: () => "(0)",
  })
  purchaseRate: number;

  @Column("varchar", { name: "SaleUnit", length: 10, default: () => "''" })
  saleUnit: string;

  @Column("float", { name: "SaleRate", precision: 53, default: () => "(0)" })
  saleRate: number;

  @Column("varchar", { name: "Accounts", length: 50, default: () => "''" })
  accounts: string;

  @Column("varchar", { name: "DateFrom", length: 10, default: () => "''" })
  dateFrom: string;

  @Column("varchar", { name: "DateTo", length: 10, default: () => "''" })
  dateTo: string;

  @Column("varchar", { name: "ImageUrl", length: 100, default: () => "''" })
  imageUrl: string;

  @Column("char", { name: "IsBatchControl", length: 1, default: () => "' '" })
  isBatchControl: string;

  @Column("varchar", { name: "TaxCode", length: 10, default: () => "'3'" })
  taxCode: string;

  @Column("char", { name: "IncludeTax", length: 1, default: () => "'Y'" })
  includeTax: string;
}
