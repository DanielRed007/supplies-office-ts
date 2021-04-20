import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Customer } from './customer.schema';

export type SalesDocument = Sales & Document;

@Schema()
export class Sales {
  @Prop()
  saleDate: Date;

  @Prop()
  storeLocation: string;

  @Prop()
  items: string;

  @Prop()
  customer: Customer;

  @Prop()
  couponUsed: string;

  @Prop()
  purchaseMethod: string;
}

export const SalesSchema = SchemaFactory.createForClass(Sales);
