import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AuthRegisterDto } from './dto/authRegister.dto';
import { AuthLoginDto } from './dto/authLogin.dto';
import { PayloadDto } from './dto/payload.dto';
import { Response } from 'express';
import { productDto } from './dto/products.dto';
import { getProductInfo } from './dto/getProductInfo.dto';

@Injectable()
export class AppService {
  constructor(private readonly http: HttpService) {}

  async registerUser(body: AuthRegisterDto, res: Response) {
    try {
      const dataFormMicroservice = await this.http.axiosRef.post(
        `${process.env.AUTH_MODULE_URL}/register`,
        { data: body },
      );
      console.log('dataFormMicroservice: ', dataFormMicroservice.data);
      return res.status(200).json({
        data: dataFormMicroservice.data,
      });
    } catch (e) {
      return res.status(500).json({
        message: e,
      });
    }
  }

  async loginUser(body: AuthLoginDto, res: Response) {
    try {
      const dataFormMicroservice = await this.http.axiosRef.post(
        `${process.env.AUTH_MODULE_URL}/login`,
        { data: body },
      );
      console.log('dataFormMicroservice: ', dataFormMicroservice.data);
      return res.status(200).json({
        data: dataFormMicroservice.data,
      });
    } catch (e) {
      return res.status(500).json({
        message: e,
      });
    }
  }

  async getProfile(payload: PayloadDto, res: Response) {
    try {
      const dataFormMicroservice = await this.http.axiosRef.post(
        `${process.env.USER_MODULE_URL}/profile`,
        { data: payload },
      );
      return res.status(200).json({
        data: dataFormMicroservice.data,
      });
    } catch (e) {
      return res.status(500).json({
        message: e,
      });
    }
  }

  async getUserOrders(payload: PayloadDto, res: Response) {
    try {
      const dataFormMicroservice = await this.http.axiosRef.post(
        `${process.env.USER_MODULE_URL}/orders`,
        { data: payload },
      );
      console.log('dataFormMicroservice: ', dataFormMicroservice.data);
      return res.status(200).json({
        data: dataFormMicroservice.data,
      });
    } catch (e) {
      return res.status(500).json({
        message: e,
      });
    }
  }

  async createProducts(body: productDto, res: Response) {
    try {
      const dataFormMicroservice = await this.http.axiosRef.post(
        `${process.env.PRODUCTS_MODULE_URL}/create`,
        { data: body },
      );
      console.log('dataFormMicroservice: ', dataFormMicroservice.data);
      return res.status(200).json({
        data: dataFormMicroservice.data,
      });
    } catch (e) {
      return res.status(500).json({
        message: e,
      });
    }
  }

  async getAllProducts(res: Response) {
    try {
      const dataFormMicroservice = await this.http.axiosRef.get(
        `${process.env.PRODUCTS_MODULE_URL}`,
      );
      console.log('dataFormMicroservice: ', dataFormMicroservice.data);
      return res.status(200).json({
        data: dataFormMicroservice.data,
      });
    } catch (e) {
      return res.status(500).json({
        message: e,
      });
    }
  }

  async getProductInfo(body: getProductInfo, res: Response) {
    try {
      const dataFormMicroservice = await this.http.axiosRef.post(
        `${process.env.PRODUCTS_MODULE_URL}/info`,
        { data: body },
      );
      console.log('dataFormMicroservice: ', dataFormMicroservice.data);
      return res.status(200).json({
        data: dataFormMicroservice.data,
      });
    } catch (e) {
      return res.status(500).json({
        message: e,
      });
    }
  }

  async createOrder(payload: PayloadDto, body: any, res: Response) {
    try {
      const dataFormMicroservice = await this.http.axiosRef.post(
        `${process.env.ORDER_MODULE_URL}/create`,
        {
          data: {
            payload: payload,
            data: body,
          },
        },
      );
      console.log('dataFormMicroservice: ', dataFormMicroservice.data);
      return res.status(200).json({
        data: dataFormMicroservice.data,
      });
    } catch (e) {
      return res.status(500).json({
        message: e,
      });
    }
  }

  async cancelOrder(payload: PayloadDto, body: any, res: Response) {
    try {
      const dataFormMicroservice = await this.http.axiosRef.post(
        `${process.env.ORDER_MODULE_URL}/cancel`,
        {
          data: {
            payload: payload,
            data: body,
          },
        },
      );
      console.log('dataFormMicroservice: ', dataFormMicroservice.data);
      return res.status(200).json({
        data: dataFormMicroservice.data,
      });
    } catch (e) {
      return res.status(500).json({
        message: e,
      });
    }
  }

  async getOrderInfo(payload: PayloadDto, body: any, res: Response) {
    try {
      const dataFormMicroservice = await this.http.axiosRef.post(
        `${process.env.ORDER_MODULE_URL}/order`,
        {
          data: {
            payload: payload,
            data: body,
          },
        },
      );
      console.log('dataFormMicroservice: ', dataFormMicroservice.data);
      return res.status(200).json({
        data: dataFormMicroservice.data,
      });
    } catch (e) {
      return res.status(500).json({
        message: e,
      });
    }
  }
}
