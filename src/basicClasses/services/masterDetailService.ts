import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MasterEntity as Master } from '../entities/masterEntity';
import { DetailEntity as Detail } from '../entities/detailEntity';
import { MasterService } from './masterService';

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

  protected deleteDetails(key: string) {
    this.detailRpstry.createQueryBuilder().delete()
        .where('flowkey = :key', {key: key}).execute();
  }
}
