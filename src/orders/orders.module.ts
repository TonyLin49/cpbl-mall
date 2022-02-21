import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { DatabaseModule } from 'src/database/database.module';
import { orderProviders } from './entity/order.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [OrdersController],
  providers: [...orderProviders,OrdersService]
})
export class OrdersModule {}
