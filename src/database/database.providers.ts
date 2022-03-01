import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'MSSQL_TEST_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mssql',
      host: '192.168.15.6',
      port: 1433,
      username: 'sa',
      password: 'gp2u03@cpbl',
      database: 'test',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: false,
      options: {encrypt: false},
    }),
  },
  {
    provide: 'MSSQL_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mssql',
      host: '192.168.15.6',
      port: 1433,
      username: 'sa',
      password: 'gp2u03@cpbl',
      database: 'eip',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: false,
      options: {encrypt: false},
    }),
  },
];