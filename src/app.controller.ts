import { Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { openAI } from 'openai';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('incomingcall')
  @HttpCode(200)
  webHookVerification(): void {

  }


}
