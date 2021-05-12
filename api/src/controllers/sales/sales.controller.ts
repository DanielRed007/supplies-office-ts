import { Controller, Get, Param } from '@nestjs/common';
import { ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Sales } from 'src/schema/sales.schema';
import { SalesService } from 'src/services/sales.service';

// TODO: check if error handling logic can be moved to controller section
@ApiTags('task')
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

  @Get('age/:age/location/:location')
  getSalesByAgeAndLocation(
    @Param('age') age,
    @Param('location') location,
  ): Promise<Sales[]> {
    return this.salesService.getSalesByAgeAndStoreLocation(age, location);
  }

  @Get('gender/:gender/satisfaction/:satisfaction')
  getSalesByGenderAndSatisfaction(
    @Param('gender') gender,
    @Param('satisfaction') satisfaction,
  ): Promise<Sales[]> {
    return this.salesService.getSalesByGenderAndSatisfaction(
      gender,
      satisfaction,
    );
  }
}
