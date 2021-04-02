import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SalesDocument = Sales & Document;

@Schema()
export class Sales{
    @Prop()
    saleDate: string;

    @Prop()
    items: string;

    @Prop()
    storeLocation: string;

    @Prop()
    couponUsed: string;

    @Prop()
    purchaseMethod: string;
}

export const SalesSchema = SchemaFactory.createForClass(Sales);