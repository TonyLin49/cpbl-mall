import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { OrdersService as Service} from './orders.service';
import { OrderEntity as MasterEntity } from './entities/order.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

const formName: string = '商城訂單';

@Controller('api/order')
@ApiTags(`${formName}接口`)
export class OrdersController {
  
  constructor(protected service: Service) {}

  @Post()
  @ApiOperation({summary: `新增${formName}資料`})
  create(@Body() createDto: MasterEntity) {
    return this.service.create(createDto);
  }

  @Get()
  @ApiOperation({summary: `獲取所有${formName}資料`})
  findAll() {
    return this.service.findAll();
  }

  @Get(':flowkey')
  @ApiOperation({summary: `依flowkey獲取一筆${formName}資料`})
  findOne(@Param('flowkey') key: string) {
    return this.service.findOne(key);
  }

  @Get(':pagesize/:pages')
  @ApiOperation({summary: `${formName}分頁查詢(pagesize:每頁筆數 / pages:第幾頁)`})
  findByPagination(@Param('pagesize') pagesize: number, @Param('pages') pages: number) {
    return this.service.findByPagination(pagesize, pages);
  }

  @Patch(':flowkey')
  @ApiOperation({summary: `依flowkey修改${formName}資料`})
  update(@Param('flowkey') key: string, @Body() updateDto: MasterEntity) {
    return this.service.update(key, updateDto);
  }

  @Delete(':flowkey')
  @ApiOperation({summary: `依flowkey刪除${formName}資料`})
  remove(@Param('flowkey') key: string) {
    return this.service.remove(key);
  }
}
