import { Connection } from 'typeorm';
import { Order as Master } from './order.entity';
import { OrderDetail as Detail } from './order-detail.entity';

export const orderProviders = [
  {
    provide: Master.REPOSITORY_NAME,
    useFactory: (connection: Connection) => connection.getRepository(Master),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: Detail.REPOSITORY_NAME,
    useFactory: (connection: Connection) => connection.getRepository(Detail),
    inject: ['DATABASE_CONNECTION'],
  }
];