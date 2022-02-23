import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user", { schema: "dbo" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("nvarchar", { name: "firstname", length: 20 })
  firstname: string;

  @Column("nvarchar", { name: "lastname", length: 20 })
  lastname: string;

  @Column("int", { name: "age" })
  age: number;
}
