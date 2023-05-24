import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { PayloadDto } from 'src/dto/payload.dto';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  handleRequest(
    err: any,
    payload: PayloadDto,
    info: any,
    context: ExecutionContext,
    status?: any,
  ): any {
    if (err || !payload) throw err || new UnauthorizedException();
    return payload;
  }
}
