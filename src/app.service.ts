import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AuthLogin } from './dto/authRegister.dto';
import { Response } from 'express';

@Injectable()
export class AppService {
  constructor(private readonly http: HttpService) {}

  async registerUser(body: AuthLogin, res: Response) {
    try {
      console.log('pass');
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
}
