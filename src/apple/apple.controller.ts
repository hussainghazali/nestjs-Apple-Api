import {
    Controller,
    Get,
    Post,
    Body,
    ForbiddenException,
  } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
  import { AppleService } from './apple.service';
  
  @Controller()
  @ApiTags('Apple Auth API')
  export class AppleController {
    constructor(private readonly appleService: AppleService) {}

    @ApiResponse({ status: 200, description: 'Successfully Logged In' })
    @ApiResponse({ status: 401, description: 'Invalid Credentials' })
    @Post('/apple')
    public async appleLogin(@Body() payload: any): Promise<any> {
      console.log('Received', payload);
      if (!payload.code) {
        throw new ForbiddenException();
      }
  
      return this.appleService.verifyUser(payload);
    }
  }