import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Sales, SalesDocument } from '../schema/sales.schema';

@Injectable()
export class SalesService {
  constructor(@InjectModel('Sales') private salesModel: Model<SalesDocument>) {}

  async getSales(): Promise<Sales[]> {
    return await this.salesModel.find().exec();
  }

  async getSaleById(id: string): Promise<Sales> {
    return await this.salesModel.findById(id).exec();
  }
}
