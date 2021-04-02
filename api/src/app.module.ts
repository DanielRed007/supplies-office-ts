import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalesController } from './controllers/sales/sales.controller';
import { SalesService } from './services/sales.service';

import { Sales, SalesSchema } from './schema/sales.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/supplies'),
    MongooseModule.forFeature([{name: 'Sales', schema: SalesSchema }])
  ],
  controllers: [AppController,SalesController],
  providers: [AppService,SalesService],
})
export class AppModule {}
