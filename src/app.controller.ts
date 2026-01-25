import { Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {

    console.log(openai)
  }


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('incomingcall')
  @HttpCode(200)
  webHookVerification(): void {

  }


}
