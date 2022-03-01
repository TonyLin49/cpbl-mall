import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_AccVoucherNo_36B12243", ["accVoucherNo"], {})
@Index("_WA_Sys_Amount_36B12243", ["amount"], {})
@Index("_WA_Sys_Applicant_36B12243", ["applicant"], {})
@Index("_WA_Sys_Code_36B12243", ["code"], {})
@Index("_WA_Sys_IdNo_36B12243", ["idNo"], {})
@Index("_WA_Sys_Insurance_36B12243", ["insurance"], {})
@Index("_WA_Sys_IsCheck_36B12243", ["isCheck"], {})
@Index("_WA_Sys_IsEmployee_36B12243", ["isEmployee"], {})
@Index("_WA_Sys_Names_36B12243", ["names"], {})
@Index("_WA_Sys_Reason_36B12243", ["reason"], {})
@Index("_WA_Sys_ReceiptDate_36B12243", ["receiptDate"], {})
@Index("_WA_Sys_SysNo_36B12243", ["sysNo"], {})
@Index("_WA_Sys_TaxType_36B12243", ["taxType"], {})
@Index("PK__ReceiptP__4B913AC7598989C1", ["flowKey"], { unique: true })
@Entity("ReceiptProof", { schema: "dbo" })
export class ReceiptProof {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("varchar", { name: "SysNo", length: 50 })
  sysNo: string;

  @Column("varchar", { name: "Code", length: 50 })
  code: string;

  @Column("varchar", { name: "CreateDept", length: 50 })
  createDept: string;

  @Column("varchar", { name: "Applicant", length: 50 })
  applicant: string;

  @Column("char", { name: "IsEmployee", length: 1 })
  isEmployee: string;

  @Column("varchar", { name: "IdNo", length: 20 })
  idNo: string;

  @Column("nvarchar", { name: "Names", length: 50 })
  names: string;

  @Column("varchar", { name: "Tel", length: 20 })
  tel: string;

  @Column("nvarchar", { name: "Address", length: 100 })
  address: string;

  @Column("varchar", { name: "TaxType", length: 50 })
  taxType: string;

  @Column("varchar", { name: "TaxNo", length: 20 })
  taxNo: string;

  @Column("varchar", { name: "ReceiptDate", length: 10 })
  receiptDate: string;

  @Column("decimal", { name: "Amount", precision: 18, scale: 0 })
  amount: number;

  @Column("decimal", { name: "Tax", precision: 18, scale: 0 })
  tax: number;

  @Column("decimal", { name: "Insurance", precision: 18, scale: 0 })
  insurance: number;

  @Column("decimal", { name: "LaborPersonal", precision: 18, scale: 0 })
  laborPersonal: number;

  @Column("decimal", { name: "NetAmount", precision: 18, scale: 0 })
  netAmount: number;

  @Column("nvarchar", { name: "Reason", length: 200 })
  reason: string;

  @Column("char", { name: "IsCheck", length: 1 })
  isCheck: string;

  @Column("varchar", { name: "AccVoucherNo", length: 50 })
  accVoucherNo: string;
}
