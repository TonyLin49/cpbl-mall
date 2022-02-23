import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { OrdersService as Service} from './orders.service';
import { Order as MasterEntity } from './entities/order.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('api')
@ApiTags('商城訂單接口')
export class OrdersController {
  
  constructor(private readonly service: Service) {}

  @Post('order')
  @ApiOperation({summary: '新增商城訂單'})
  create(@Body() createDto: MasterEntity) {
    return this.service.create(createDto);
  }

  @Get('orders')
  @ApiOperation({summary: '獲取所有商城訂單資料'})
  findAll() {
    return this.service.findAll();
  }

  @Get('order/:flowkey')
  @ApiOperation({summary: '依flowkey獲取一筆商城訂單資料'})
  findOne(@Param('flowkey') key: string) {
    return this.service.findOne(key);
  }

  @Get('orders/:pageSize/:pages')
  @ApiOperation({summary: '訂單分頁查詢(pageSize:每頁筆數, pages:第幾頁)'})
  findByPagination(@Param('pageSize') pageSize: number, @Param('pages') pages: number) {
    return this.service.findByPagination(pageSize, pages);
  }

  @Patch('order/:flowkey')
  @ApiOperation({summary: '依flowkey修改商城訂單資料'})
  update(@Param('flowkey') key: string, @Body() updateDto: MasterEntity) {
    return this.service.update(key, updateDto);
  }

  @Delete('order/:flowkey')
  @ApiOperation({summary: '依flowkey刪除商城訂單資料'})
  remove(@Param('flowkey') key: string) {
    return this.service.remove(key);
  }
}
