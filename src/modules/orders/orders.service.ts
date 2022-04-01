import { Inject, Injectable} from '@nestjs/common';
import { Repository } from 'typeorm';
import { OrderEntity as Master } from './entities/order.entity';
import { OrderDetailEntity as Detail } from './entities/order.detail.entity';
import { MasterDetailService } from 'src/basicClasses/services/master.detail.service';

@Injectable()
export class OrdersService extends MasterDetailService{

  constructor(
    @Inject(Master.REPOSITORY_NAME)
    protected masterRpstry: Repository<Master>,
    @Inject(Detail.REPOSITORY_NAME)
    protected detailRpstry?: Repository<Detail>,
  ){
    super(masterRpstry, detailRpstry);
  }

}
