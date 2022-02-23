import { Inject, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Order as Master } from './entities/order.entity';
import { OrderDetail as Detail } from './entities/order-detail.entity';
import { BasicService } from 'src/basicClasses/services/basicService';

@Injectable()
export class OrdersService extends BasicService{

  protected hasDetail: boolean = false;

  constructor(
    @Inject(Master.REPOSITORY_NAME)
    protected masterRpstry: Repository<Master>,
    @Inject(Detail.REPOSITORY_NAME)
    protected detailRpstry?: Repository<Detail>,
  ){
    super(masterRpstry, detailRpstry);
  }

}
