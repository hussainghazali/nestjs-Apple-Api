import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/db-config.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppleModule } from './apple/apple.module';


// code hidden for display purpose
@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    AppleModule,
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
