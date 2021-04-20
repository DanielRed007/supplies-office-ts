import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SalesDocument = Customer & Document;

@Schema()
export class Customer {
  @Prop()
  gender: string;

  @Prop()
  age: number;

  @Prop()
  email: string;

  @Prop()
  satisfaction: number;
}

export const CustomersSchema = SchemaFactory.createForClass(Customer);
