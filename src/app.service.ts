import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'API de usuários utilizando NestJS + GraphQL + TypeORM!';
  }
}
