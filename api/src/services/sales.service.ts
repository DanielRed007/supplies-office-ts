import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Sales, SalesDocument } from '../schema/sales.schema';
import { ageAndStoreLocation, storeLocation } from './queries/sales-queries';
import { genderAndSatisfaction } from './pipelines/sales-pipelines';
import { sendErrorStatus } from 'src/error/error-handling';

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
    const query = storeLocation(location);
    return this.salesModel.find(query).exec();
  }

  // Get sales by age and store location
  async getSalesByAgeAndStoreLocation(
    age: string,
    location: string,
  ): Promise<Sales[]> {
    const parsedAge = parseInt(age);

    if (parsedAge < 16 || parsedAge > 150) {
      sendErrorStatus('Must Specify a valid age', HttpStatus.BAD_REQUEST);
    }

    const query = ageAndStoreLocation(parsedAge, location);
    return await this.salesModel.find(query).exec();
  }

  async getSalesByGenderAndSatisfaction(
    gender: string,
    satisfaction: string,
  ): Promise<Sales[]> {
    const parsedSatisfaction = parseInt(satisfaction);
    const formatGender = gender.toUpperCase();

    if (formatGender !== 'F' && formatGender !== 'M') {
      sendErrorStatus('Must Specify a valid gender', HttpStatus.BAD_REQUEST);
    }

    if (parsedSatisfaction < 0 || parsedSatisfaction > 5) {
      sendErrorStatus(
        'Must Specify a valid satisfaction range value',
        HttpStatus.BAD_REQUEST,
      );
    }

    const pipeline = genderAndSatisfaction(formatGender, parsedSatisfaction);

    return await this.salesModel.aggregate(pipeline).exec();
  }
}
