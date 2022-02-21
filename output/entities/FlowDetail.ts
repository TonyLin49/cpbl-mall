import { Column, Entity, Index } from "typeorm";

@Index("_WA_Sys_Form_tableName_117F9D94", ["formTableName"], {})
@Index("_WA_Sys_Seq_no_117F9D94", ["seqNo"], {})
@Index("_WA_Sys_Signed_result_117F9D94", ["signedResult"], {})
@Index("PK__Flow_det__793933C20C899697", ["flowKey", "seqNo"], { unique: true })
@Entity("Flow_detail", { schema: "dbo" })
export class FlowDetail {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("int", { primary: true, name: "Seq_no" })
  seqNo: number;

  @Column("int", { name: "Step" })
  step: number;

  @Column("nvarchar", { name: "Step_name", length: 100 })
  stepName: string;

  @Column("nvarchar", { name: "Signer_id", length: 50 })
  signerId: string;

  @Column("nvarchar", { name: "Signer_name", length: 50 })
  signerName: string;

  @Column("nvarchar", { name: "Signer_department", length: 50 })
  signerDepartment: string;

  @Column("nvarchar", { name: "Signed_time", length: 20 })
  signedTime: string;

  @Column("nvarchar", { name: "Signed_result", length: 50 })
  signedResult: string;

  @Column("nvarchar", { name: "Form_tableName", length: 50 })
  formTableName: string;

  @Column("ntext", { name: "Memo" })
  memo: string;
}
