import { Inject, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Order as Master } from './entity/order.entity';
import { OrderDetail as Detail } from './entity/order-detail.entity';

@Injectable()
export class OrdersService {

  constructor(
    @Inject('ORDER_REPOSITORY')
    private masterRpstry: Repository<Master>,
    @Inject('ORDERDETAIL_REPOSITORY')
    private detailRpstry: Repository<Detail>,
  ){}

  async create(masterDto: Master) {
    if(await this.hasMasterEntity(masterDto.flowkey)) {
      throw new NotAcceptableException(`this flowkey #${masterDto.flowkey} already exists, no need to add`)
    }
    else return this.masterRpstry.save(masterDto);
  }

  async findAll() {
    return await this.masterRpstry.find({relations:['details']});
  }

  async findOne(key: string) {
    if(!(await this.hasMasterEntity(key)))
      throw this.notFoundException(key);
    else 
      return await this.masterRpstry.findOne(key,{relations:['details']});
  }

  async update(key: string, masterDto: Master) {
    if(!(await this.hasMasterEntity(key))){
      throw this.notFoundException(key);
    } else {
      this.deleteDetails(key);
      return this.masterRpstry.save(masterDto)
    }
  }

  async remove(key: string) {
    if(!(await this.hasMasterEntity(key))){
      throw this.notFoundException(key);
    } else {
      this.deleteDetails(key);
      return this.masterRpstry.delete(key);
    }
  }

  private async hasMasterEntity(key: string): Promise<boolean>{
    const order = await this.masterRpstry.findOne(key);
    if(order) return true;
    else return false;
  }

  private notFoundException(key: string): NotFoundException{
    return new NotFoundException(`not found this flowkey #${key}`)
  }

  private deleteDetails(key: string){
    this.detailRpstry.createQueryBuilder().delete()
        .where('flowkey = :key', {key: key}).execute()
  }
}
