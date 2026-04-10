import { Controller, Get, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { get } from 'mongoose';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService){}

    @Post()
    create() {
        return this.employeeService.createEmployee();
    }
    
    @Get()
    getAll() {
        return this.employeeService.findAll()
    }
}
