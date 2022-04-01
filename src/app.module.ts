import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { OrdersModule } from './modules/orders/orders.module';
// import { EmployeeModule } from './employee/employee.module';
import { AuthModule } from './auth/auth.module';

const importModule = [
  DatabaseModule, 
  OrdersModule,
  // EmployeeModule,
];

@Module({
  imports: importModule,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
