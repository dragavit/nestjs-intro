import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {} // получает одну переменную - instance of injectable class AppService

  @Get()
  getHello(): string {
    return this.appService.getHello(); // в этом instance вызывается метод getHello()
  }
}
