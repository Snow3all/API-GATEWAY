import { Controller, Get, Post, Body, Res, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthRegister } from './dto/authRegister.dto';
import { AuthLogin } from './dto/authLogin.dto';
import { PayloadDto } from './dto/payload.dto';
import { Response } from 'express';
import { Payload } from './decorator/payload.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/auth/register')
  registerUser(@Body() body: AuthRegister, @Res() res: Response) {
    return this.appService.registerUser(body, res);
  }

  @Post('/auth/login')
  loginUser(@Body() body: AuthLogin, @Res() res: Response) {
    return this.appService.loginUser(body, res);
  }

  @Get('/user/profile')
  getProfile(@Payload() payload: PayloadDto, @Res() res: Response) {
    return this.appService.getProfile(payload, res);
  }
}
