import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Address_48CFD27E", ["address"], {})
@Index("_WA_Sys_Applicant_48CFD27E", ["applicant"], {})
@Index("_WA_Sys_Birthday_48CFD27E", ["birthday"], {})
@Index("_WA_Sys_Code_48CFD27E", ["code"], {})
@Index("_WA_Sys_DateFrom_48CFD27E", ["dateFrom"], {})
@Index("_WA_Sys_DateTo_48CFD27E", ["dateTo"], {})
@Index("_WA_Sys_DisabledManual_48CFD27E", ["disabledManual"], {})
@Index("_WA_Sys_HasOldAgeBenefits_48CFD27E", ["hasOldAgeBenefits"], {})
@Index("_WA_Sys_IdType_48CFD27E", ["idType"], {})
@Index("_WA_Sys_IsCheck_48CFD27E", ["isCheck"], {})
@Index("_WA_Sys_IsPaidConsent_48CFD27E", ["isPaidConsent"], {})
@Index("_WA_Sys_IsPaidIssueCopy_48CFD27E", ["isPaidIssueCopy"], {})
@Index("_WA_Sys_IsUseAgreement_48CFD27E", ["isUseAgreement"], {})
@Index("_WA_Sys_Names_48CFD27E", ["names"], {})
@Index("_WA_Sys_SpecialCode_48CFD27E", ["specialCode"], {})
@Index("_WA_Sys_SysNo_48CFD27E", ["sysNo"], {})
@Index("_WA_Sys_Tel_48CFD27E", ["tel"], {})
@Index("PK__TmpStaff__4B913AC712B7899A", ["flowKey"], { unique: true })
@Entity("TmpStaff", { schema: "dbo" })
export class TmpStaff {
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

  @Column("nvarchar", { name: "Names", length: 50 })
  names: string;

  @Column("varchar", { name: "Birthday", length: 10 })
  birthday: string;

  @Column("varchar", { name: "Tel", length: 20 })
  tel: string;

  @Column("nvarchar", { name: "Address", length: 100 })
  address: string;

  @Column("varchar", { name: "AreaCode", length: 50 })
  areaCode: string;

  @Column("varchar", { name: "IdType", length: 50 })
  idType: string;

  @Column("varchar", { name: "TaxNo", length: 20 })
  taxNo: string;

  @Column("nvarchar", { name: "Memo", length: 200 })
  memo: string;

  @Column("char", { name: "IsCheck", length: 1 })
  isCheck: string;

  @Column("varchar", { name: "DisabledManual", length: 50 })
  disabledManual: string;

  @Column("char", { name: "HasOldAgeBenefits", length: 1 })
  hasOldAgeBenefits: string;

  @Column("varchar", { name: "SpecialCode", length: 50 })
  specialCode: string;

  @Column("varchar", { name: "DateFrom", length: 10 })
  dateFrom: string;

  @Column("varchar", { name: "DateTo", length: 10 })
  dateTo: string;

  @Column("char", { name: "IsPaidIdCopy", length: 1 })
  isPaidIdCopy: string;

  @Column("char", { name: "IsPaidConsent", length: 1 })
  isPaidConsent: string;

  @Column("varchar", { name: "IdCopyDocUrl", length: 100, default: () => "''" })
  idCopyDocUrl: string;

  @Column("varchar", {
    name: "IssueCopyDocUrl",
    length: 100,
    default: () => "''",
  })
  issueCopyDocUrl: string;

  @Column("varchar", {
    name: "ConsentDocUrl",
    length: 100,
    default: () => "''",
  })
  consentDocUrl: string;

  @Column("char", { name: "IsPaidIssueCopy", length: 1, default: () => "''" })
  isPaidIssueCopy: string;

  @Column("varchar", {
    name: "PaidConsentLastDate",
    length: 10,
    default: () => "''",
  })
  paidConsentLastDate: string;

  @Column("char", { name: "IsUseAgreement", length: 1, default: () => "''" })
  isUseAgreement: string;

  @Column("varchar", {
    name: "IsUseAgreementUrl",
    length: 100,
    default: () => "''",
  })
  isUseAgreementUrl: string;

  @Column("char", {
    name: "NoNeedEmploymentInsurance",
    length: 1,
    default: () => "''",
  })
  noNeedEmploymentInsurance: string;
}
