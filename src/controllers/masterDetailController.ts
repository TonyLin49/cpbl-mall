import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { MasterService as Service} from '../basicClasses/services/masterService';
import { MasterEntity } from '../basicClasses/entities/masterEntity';
import { ApiOperation } from '@nestjs/swagger';

@Controller('api/order')
export class MasterDetailController {
  
  constructor(protected service: Service) {}

  @Post()
  @ApiOperation({summary: `新增資料`})
  create(@Body() createDto: MasterEntity) {
    return this.service.create(createDto);
  }

  @Get()
  @ApiOperation({summary: `獲取所有資料`})
  findAll() {
    return this.service.findAll();
  }

  @Get(':flowkey')
  @ApiOperation({summary: `依flowkey獲取一筆資料`})
  findOne(@Param('flowkey') key: string) {
    return this.service.findOne(key);
  }

  @Get(':pagesize/:pages')
  @ApiOperation({summary: `分頁查詢(pagesize:每頁筆數 / pages:第幾頁)`})
  findByPagination(@Param('pagesize') pagesize: number, @Param('pages') pages: number) {
    return this.service.findByPagination(pagesize, pages);
  }

  @Patch(':flowkey')
  @ApiOperation({summary: `依flowkey修改資料`})
  update(@Param('flowkey') key: string, @Body() updateDto: MasterEntity) {
    return this.service.update(key, updateDto);
  }

  @Delete(':flowkey')
  @ApiOperation({summary: `依flowkey刪除資料`})
  remove(@Param('flowkey') key: string) {
    return this.service.remove(key);
  }
}
