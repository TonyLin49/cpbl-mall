import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_AllowanceType_781FBE44", ["allowanceType"], {})
@Index("_WA_Sys_BuyerName_781FBE44", ["buyerName"], {})
@Index("_WA_Sys_BuyerVatNo_781FBE44", ["buyerVatNo"], {})
@Index("_WA_Sys_Code_781FBE44", ["code"], {})
@Index("_WA_Sys_SellerVatNo_781FBE44", ["sellerVatNo"], {})
@Index("_WA_Sys_SysNo_781FBE44", ["sysNo"], {})
@Index("PK__Allowanc__4B913AC7A532C377", ["flowKey"], { unique: true })
@Entity("Allowance", { schema: "dbo" })
export class Allowance {
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

  @Column("varchar", { name: "AllowanceDate", length: 10, default: () => "''" })
  allowanceDate: string;

  @Column("varchar", { name: "AccYear", length: 10, default: () => "''" })
  accYear: string;

  @Column("varchar", { name: "AccMonth", length: 10, default: () => "''" })
  accMonth: string;

  @Column("varchar", { name: "SellerVatNo", length: 20, default: () => "''" })
  sellerVatNo: string;

  @Column("nvarchar", { name: "SellerName", length: 50, default: () => "''" })
  sellerName: string;

  @Column("nvarchar", {
    name: "SellerAddress",
    length: 50,
    default: () => "''",
  })
  sellerAddress: string;

  @Column("varchar", { name: "BuyerVatNo", length: 20, default: () => "''" })
  buyerVatNo: string;

  @Column("nvarchar", { name: "BuyerName", length: 50, default: () => "''" })
  buyerName: string;

  @Column("nvarchar", { name: "BuyerAddress", length: 50, default: () => "''" })
  buyerAddress: string;

  @Column("decimal", {
    name: "TaxAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  taxAmount: number;

  @Column("decimal", {
    name: "TotalAmount",
    precision: 18,
    scale: 2,
    default: () => "(0)",
  })
  totalAmount: number;

  @Column("varchar", { name: "AllowanceType", length: 10, default: () => "''" })
  allowanceType: string;

  @Column("char", { name: "IsInvalid", length: 1, default: () => "' '" })
  isInvalid: string;

  @Column("nvarchar", { name: "CancelReason", length: 50, default: () => "''" })
  cancelReason: string;

  @Column("varchar", { name: "CancelDate", length: 10, default: () => "''" })
  cancelDate: string;

  @Column("varchar", { name: "CancelTime", length: 10, default: () => "''" })
  cancelTime: string;

  @Column("char", { name: "HasTransXml", length: 1, default: () => "' '" })
  hasTransXml: string;
}
