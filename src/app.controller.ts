import { Controller, Get, Post, Delete, Body, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { Payload } from './decorator/payload.decorator';
import { AuthRegisterDto } from './dto/authRegister.dto';
import { AuthLoginDto } from './dto/authLogin.dto';
import { PayloadDto } from './dto/payload.dto';
import { productDto } from './dto/products.dto';
import { getProductInfo } from './dto/getProductInfo.dto';
import { Public } from './decorator/public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Post('/auth/register')
  registerUser(@Body() body: AuthRegisterDto, @Res() res: Response) {
    return this.appService.registerUser(body, res);
  }

  @Public()
  @Post('/auth/login')
  loginUser(@Body() body: AuthLoginDto, @Res() res: Response) {
    return this.appService.loginUser(body, res);
  }

  @Get('/user/profile')
  getProfile(@Payload() payload: PayloadDto, @Res() res: Response) {
    return this.appService.getProfile(payload, res);
  }

  @Get('/user/orders')
  getUserOrders(@Payload() payload: PayloadDto, @Res() res: Response) {
    return this.appService.getUserOrders(payload, res);
  }

  @Public()
  @Get('/products')
  getAllProduct(@Res() res: Response) {
    return this.appService.getAllProducts(res);
  }

  @Public()
  @Post('/products/create')
  createProduct(@Body() body: productDto, @Res() res: Response) {
    return this.appService.createProducts(body, res);
  }

  @Public()
  @Post('/products/info')
  getProductInfo(@Body() body: getProductInfo, @Res() res: Response) {
    return this.appService.getProductInfo(body, res);
  }

  @Post('/order/info')
  getOrderInfo(
    @Payload() payload: PayloadDto,
    @Body() body: productDto,
    @Res() res: Response,
  ) {
    return this.appService.getOrderInfo(payload, body, res);
  }

  @Post('/order/create')
  createOrder(
    @Payload() payload: PayloadDto,
    @Body() body: productDto,
    @Res() res: Response,
  ) {
    return this.appService.createOrder(payload, body, res);
  }

  @Delete('/order/cancel')
  cancelOrder(
    @Payload() payload: PayloadDto,
    @Body() body: productDto,
    @Res() res: Response,
  ) {
    return this.appService.cancelOrder(payload, body, res);
  }
}
