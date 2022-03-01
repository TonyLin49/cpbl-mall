import { Connection } from 'typeorm';
import { EmployeeEntity as Master } from './employee.entity';

export const employeeProviders = [
  {
    provide: Master.REPOSITORY_NAME,
    useFactory: (connection: Connection) => connection.getRepository(Master),
    inject: ['MSSQL_CONNECTION'],
  }
];