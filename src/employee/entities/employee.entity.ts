import { Entity } from "typeorm";
import { Employee } from "output/entities/Employee";
import { ApiProperty } from "@nestjs/swagger";

@Entity("Employee", { schema: "dbo" })
export class EmployeeEntity extends Employee {

  static REPOSITORY_NAME: string = 'EMPLOYEE_REPOSITORY'

  @ApiProperty({description: '流程代碼:為系統碼+單號', example: '1O1110218001'})
  flowkey: string;

  @ApiProperty({description: '系統碼:一律填寫 1', example: '1'})
  sysno: string;

  @ApiProperty({description: '單號', example: 'O1110218001'})
  code: string;

  @ApiProperty({description: '申請人(員工號碼)', example: '10803001'})
  applicant: string;

  @ApiProperty({description: '資料部門:申請人所屬部門', example: 'B11'})
  createdept: string;

  empName: string;

  idType: string;

  idNo: string;

  deptId: string;

  agent: string;

  tel: string;

  mobile: string;

  email: string;

  address: string;

  jobTitle: string;

  onBoardDate: string;

  leavesDate: string;

  birthday: string;

  jobDegree: string;

  salaryLevel: string;

  hourlyWage: number;

  groupType: string;

  leader: string;

  isHeads: string;

  agentDept: string;
}