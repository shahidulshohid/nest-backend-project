import { Injectable } from '@nestjs/common';
import {ConfigureService} from '@nestjs/config'

@Injectable()
export class EvService {
    constructor(private configureService: ConfigureService){}

    getDbUrl() {
        return this.configureService.get<string>('DATABASE_URL')
    }
}
