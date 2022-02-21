import { Connection } from 'typeorm';
import { OrderDetail } from './order-detail.entity';
import { Order } from './order.entity';

export const orderProviders = [
  {
    provide: 'ORDER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Order),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'ORDERDETAIL_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(OrderDetail),
    inject: ['DATABASE_CONNECTION'],
  }
];