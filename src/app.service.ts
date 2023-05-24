import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AuthRegister } from './dto/authRegister.dto';
import { AuthLogin } from './dto/authLogin.dto';
import { Response } from 'express';

@Injectable()
export class AppService {
  constructor(private readonly http: HttpService) {}

  async registerUser(body: AuthRegister, res: Response) {
    try {
      const dataFormMicroservice = await this.http.axiosRef.post(
        `${process.env.AUTH_URL}/register`,
        { data: body },
      );
      console.log('dataFormMicroservice: ', dataFormMicroservice);
      return res.status(200).json({
        data: dataFormMicroservice.data,
      });
    } catch (e) {
      return res.status(500).json({
        message: e,
      });
    }
  }

  async loginUser(body: AuthLogin, res: Response) {
    try {
      const dataFormMicroservice = await this.http.axiosRef.post(
        `${process.env.AUTH_URL}/login`,
        { data: body },
      );
      console.log('dataFormMicroservice: ', dataFormMicroservice);
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
