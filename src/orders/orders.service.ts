import { Inject, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { OrderDetail } from './entity/order-detail.entity';
import { Order } from './entity/order.entity';

@Injectable()
export class OrdersService {

  constructor(
    @Inject('ORDER_REPOSITORY')
    private repository: Repository<Order>,
    @Inject('ORDERDETAIL_REPOSITORY')
    private detailRepository: Repository<OrderDetail>,
  ){}

  async create(orderDto: Order) {
    await this.throwNotAcceptException(orderDto.flowkey);
    return this.repository.save(orderDto);
  }

  async findAll() {
    return await this.repository.find({relations:['details']});
  }

  async findOne(key: string) {
    this.throwNotFoundException(key);
    return await this.repository.findOne(key,{relations:['details']});
  }

  async update(key: string, orderDto: Order) {
    this.throwNotFoundException(key);
    this.deleteDetails(key);
    return this.repository.save(orderDto)
  }

  remove(key: string) {
    this.throwNotFoundException(key);
    this.deleteDetails(key);
    return this.repository.delete(key);
  }

  private async throwNotFoundException(key: string){
    const order = await this.repository.findOne(key);
    if(!order){
      throw new NotFoundException(`無此訂單 #${key}`)
    }
  }

  private async throwNotAcceptException(key: string){
    const order = await this.repository.findOne(key);
    if(order){
      throw new NotAcceptableException(`此訂單#${key}資料已存在，不必重複新增`)
    }
  }

  private deleteDetails(key: string){
    this.detailRepository.createQueryBuilder().delete()
        .where('flowkey = :key', {key: key}).execute()
  }
}
