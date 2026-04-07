import { Controller, Get } from '@nestjs/common';
import { EvService } from './ev.service';

@Controller('ev')
export class EvController {
    constructor(private readonly evService: EvService){}
    @Get()
    GetUrl(){
        return this.evService.getDbUrl();
    }
}
