import { Column, Entity } from "typeorm";

@Entity("SessionInfo", { schema: "dbo" })
export class SessionInfo {
  @Column("nvarchar", { name: "UserId", length: 50 })
  userId: string;

  @Column("nvarchar", { name: "SessionId", length: 200 })
  sessionId: string;

  @Column("nvarchar", { name: "FlowKey", nullable: true, length: 50 })
  flowKey: string | null;
}
