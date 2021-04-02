import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {Sales, SalesDocument} from "../schema/sales.schema";

@Injectable()
export class SalesService {
    constructor(@InjectModel("Sales") private salesModel: Model<SalesDocument>){}

  async getSales(): Promise<Sales[]> {
    return this.salesModel.find().exec();
  }
}
