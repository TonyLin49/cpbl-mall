import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from './entity/order.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('api')
@ApiTags('商城訂單接口')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('order')
  @ApiOperation({summary: '新增商城訂單'})
  create(@Body() createOrderDto: Order) {
    return this.ordersService.create(createOrderDto);
  }

  @Get('orders')
  @ApiOperation({summary: '獲取所有商城訂單資料'})
  findAll() {
    return this.ordersService.findAll();
  }

  @Get('order/:flowkey')
  @ApiOperation({summary: '依flowkey獲取一筆商城訂單資料'})
  findOne(@Param('flowkey') key: string) {
    return this.ordersService.findOne(key);
  }

  @Patch('order/:flowkey')
  @ApiOperation({summary: '依flowkey修改商城訂單資料'})
  update(@Param('flowkey') key: string, @Body() order: Order) {
    return this.ordersService.update(key, order);
  }

  @Delete('order/:flowkey')
  @ApiOperation({summary: '依flowkey刪除商城訂單資料'})
  remove(@Param('flowkey') key: string) {
    return this.ordersService.remove(key);
  }
}
