import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { DatabaseModule } from 'src/database/database.module';
import { employeeProviders } from 'src/employee/entities/employee.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [EmployeeController],
  providers: [...employeeProviders,EmployeeService]
})
export class EmployeeModule {}
