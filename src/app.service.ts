import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'CPBL商城訂單介接API，伺服器正常工作中....';
  }
}
