import { Controller, Get, Post, Req, Res } from '@nestjs/common';

import { Message } from '@chat-app/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('login')
  login(@Req() req: Request) {
  }
}
