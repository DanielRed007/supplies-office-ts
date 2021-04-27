import { Controller, Get, Param } from '@nestjs/common';
import { Sales } from 'src/schema/sales.schema';
import { SalesService } from 'src/services/sales.service';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get()
  getSalesList(): Promise<Sales[]> {
    return this.salesService.getSales();
  }

  @Get('/:id')
  getSaleById(@Param('id') id): Promise<Sales> {
    return this.salesService.getSaleById(id);
  }

  @Get('location/:location')
  getSalesByLocation(@Param('location') location): Promise<Sales[]> {
    return this.salesService.getSalesByStoreLocation(location);
  }

}
