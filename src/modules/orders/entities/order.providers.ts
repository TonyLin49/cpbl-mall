import { Connection } from 'typeorm';
import { OrderEntity as Master } from './order.entity';
import { OrderDetailEntity as Detail } from './order.detail.entity';

const DB_PROVIDE_NAME = 'MSSQL_CONNECTION';

export const orderProviders = [
  {
    provide: Master.REPOSITORY_NAME,
    useFactory: (connection: Connection) => connection.getRepository(Master),
    inject: [DB_PROVIDE_NAME],
  },
  {
    provide: Detail.REPOSITORY_NAME,
    useFactory: (connection: Connection) => connection.getRepository(Detail),
    inject: [DB_PROVIDE_NAME],
  }
];