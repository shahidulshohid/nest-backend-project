import { Controller, Get, HttpException, Param, ParseIntPipe, UseFilters } from '@nestjs/common';

@Controller('exception')
@UseFilters(HttpException)
export class ExceptionController {
    @Get('hello/:id')
    getHello(@Param('id', ParseIntPipe) id: number){ 
 return { message: `your ID Is: ${id}`}
    }
}
