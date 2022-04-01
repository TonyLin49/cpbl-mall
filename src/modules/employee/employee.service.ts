import { Inject, Injectable } from '@nestjs/common';
import { MasterService } from 'src/basicClasses/services/master.service';
import { Repository } from 'typeorm';
import { EmployeeEntity as Master } from './entities/employee.entity';

@Injectable()
export class EmployeeService extends MasterService {
  constructor(
    @Inject(Master.REPOSITORY_NAME)
    protected masterRpstry: Repository<Master>,
  ){
    super(masterRpstry);
  }
}
