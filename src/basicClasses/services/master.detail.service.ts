import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MasterEntity as Master } from '../entities/master.entity';
import { DetailEntity as Detail } from '../entities/detail.entity';
import { MasterService } from './master.service';

@Injectable()
export class MasterDetailService extends MasterService {

  constructor(
    @Inject(Master.REPOSITORY_NAME)
    protected masterRpstry: Repository<Master>,
    @Inject(Detail.REPOSITORY_NAME)
    protected detailRpstry?: Repository<Detail>,
  ){super(masterRpstry)}

  /* async findAll() {
    return await this.masterRpstry.find({relations:['details']});
  } */

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

  protected async deleteDetails(key: string) {
    await this.detailRpstry.createQueryBuilder().delete()
        .where('flowkey = :key', {key: key}).execute();
  }
}
