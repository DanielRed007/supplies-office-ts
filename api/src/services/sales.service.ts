import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Sales, SalesDocument } from '../schema/sales.schema';

@Injectable()
export class SalesService {
  constructor(@InjectModel('Sales') private salesModel: Model<SalesDocument>) {}

  // Get full list of sales
  async getSales(): Promise<Sales[]> {
    return await this.salesModel.find().exec();
  }

  // Get Sale by id
  async getSaleById(id: string): Promise<Sales> {
    return await this.salesModel.findById(id).exec();
  }

  // Get sales by store location
  async getSalesByStoreLocation(location: string): Promise<Sales[]> {
    const query = { storeLocation: location };
    return this.salesModel.find(query).exec();
  }
}
