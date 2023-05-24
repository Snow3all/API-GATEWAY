import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthLogin } from './dto/authRegister.dto';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/auth/register')
  registerUser(@Body() body: AuthLogin, @Res() res: Response) {
    return this.appService.registerUser(body, res);
  }
}
