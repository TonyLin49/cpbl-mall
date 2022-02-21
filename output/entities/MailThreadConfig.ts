import { Column, Entity, Index } from "typeorm";

@Index("PK__MailThre__4B913AC7FCF0D4FC", ["flowKey"], { unique: true })
@Entity("MailThreadConfig", { schema: "dbo" })
export class MailThreadConfig {
  @Column("nvarchar", { primary: true, name: "FlowKey", length: 50 })
  flowKey: string;

  @Column("nvarchar", { name: "SysNo", length: 50 })
  sysNo: string;

  @Column("nvarchar", { name: "Code", length: 50 })
  code: string;

  @Column("nvarchar", { name: "Applicant", length: 50 })
  applicant: string;

  @Column("nvarchar", { name: "CreateDept", length: 50 })
  createDept: string;

  @Column("nvarchar", { name: "Host", length: 50 })
  host: string;

  @Column("nvarchar", { name: "EmailAccount", length: 50 })
  emailAccount: string;

  @Column("nvarchar", { name: "EmailAddress", length: 100 })
  emailAddress: string;

  @Column("nvarchar", { name: "Password", length: 20 })
  password: string;

  @Column("nvarchar", { name: "LastExecuteTime", length: 20 })
  lastExecuteTime: string;

  @Column("nvarchar", { name: "NextExecuteTime", length: 20 })
  nextExecuteTime: string;

  @Column("nvarchar", { name: "DelayTime", length: 20 })
  delayTime: string;

  @Column("nvarchar", { name: "MailPeriod", length: 20 })
  mailPeriod: string;

  @Column("nvarchar", { name: "ExecuteStatus", length: 50 })
  executeStatus: string;

  @Column("nchar", { name: "Authority", length: 1 })
  authority: string;

  @Column("nchar", { name: "TurnOn", length: 1 })
  turnOn: string;

  @Column("nvarchar", { name: "SmtpPort", length: 10 })
  smtpPort: string;

  @Column("nvarchar", { name: "Starttls", length: 50 })
  starttls: string;
}
