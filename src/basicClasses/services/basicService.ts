import { Inject, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MasterEntity as Master } from '../entities/masterEntity';
import { DetailEntity as Detail } from '../entities/detailEntity';

@Injectable()
export class BasicService {

  protected hasDetail: boolean = true;

  constructor(
    @Inject(Master.REPOSITORY_NAME)
    protected masterRpstry: Repository<Master>,
    @Inject(Detail.REPOSITORY_NAME)
    protected detailRpstry?: Repository<Detail>,
  ){}

  async create(masterDto: Master) {
    if(await this.hasMasterEntity(masterDto.flowkey)) {
      throw new NotAcceptableException(
        `${Master.name}.entity.flowkey #${masterDto.flowkey} already exists, no need to add`)
    }
    else return this.masterRpstry.save(masterDto);
  }

  async findAll() {
    return await this.masterRpstry.find(/* {relations:['details']} */);
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
      if(this.hasDetail) this.deleteDetails(key);
      return this.masterRpstry.save(masterDto)
    }
  }

  async remove(key: string) {
    if(!(await this.hasMasterEntity(key))){
      throw this.notFoundException(key);
    } else {
      if(this.hasDetail) this.deleteDetails(key);
      return this.masterRpstry.delete(key);
    }
  }

  async findByPagination(pageSize: number, pages: number){
    const skipNum = (pages-1)*pageSize;
    if(skipNum<0) skipNum==0;
    return await this.masterRpstry.createQueryBuilder()
                     //.leftJoinAndSelect("orders_detail", "details", "order.flowkey = details.flowkey")
                     .skip(skipNum).take(pageSize).getManyAndCount();
  }

  private async hasMasterEntity(key: string): Promise<boolean>{
    const master = await this.masterRpstry.findOne(key);
    if(master) return true;
    else return false;
  }

  private notFoundException(key: string): NotFoundException{
    return new NotFoundException(`Not found ${Master.name}.entity.flowkey #${key}`)
  }

  private deleteDetails(key: string) {
    if(this.hasDetail) 
      this.detailRpstry.createQueryBuilder().delete()
          .where('flowkey = :key', {key: key}).execute();
  }
}
