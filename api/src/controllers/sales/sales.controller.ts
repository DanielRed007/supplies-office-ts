import { Controller, Get } from '@nestjs/common';
import { Sales } from 'src/schema/sales.schema';
import { SalesService } from 'src/services/sales.service';


@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get()
  getHello(): Promise<Sales[]> {
    return this.salesService.getSales();
  }
}
