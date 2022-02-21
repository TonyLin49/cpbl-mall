import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller('api')
@ApiTags('API伺服器')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({summary: '測試API伺服器是否正常工作'})
  getHello(): string {
    return this.appService.getHello();
  }
}
