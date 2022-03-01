import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeEntity } from './entities/employee.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

const formName: string = '員工';

@Controller('api/employee')
@ApiTags(`${formName}接口`)
export class EmployeeController{

  constructor(protected service: EmployeeService) {}

  @Post()
  @ApiOperation({summary: `新增${formName}資料`})
  create(@Body() createDto: EmployeeEntity) {
    return this.service.create(createDto);
  }

  @Get()
  @ApiOperation({summary: `獲取所有${formName}資料`})
  findAll() {
    return this.service.findAll();
  }

  @Get(':flowkey')
  @ApiOperation({summary: `依flowkey獲取一筆${formName}資料`})
  findOne(@Param('flowkey') key: string) {
    return this.service.findOne(key);
  }

  @Get(':pagesize/:pages')
  @ApiOperation({summary: `${formName}分頁查詢(pagesize:每頁筆數 / pages:第幾頁)`})
  findByPagination(@Param('pagesize') pagesize: number, @Param('pages') pages: number) {
    return this.service.findByPagination(pagesize, pages);
  }

  @Patch(':flowkey')
  @ApiOperation({summary: `依flowkey修改${formName}資料`})
  update(@Param('flowkey') key: string, @Body() updateDto: EmployeeEntity) {
    return this.service.update(key, updateDto);
  }

  @Delete(':flowkey')
  @ApiOperation({summary: `依flowkey刪除${formName}資料`})
  remove(@Param('flowkey') key: string) {
    return this.service.remove(key);
  }
}
