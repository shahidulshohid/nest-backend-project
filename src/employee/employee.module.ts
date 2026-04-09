import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { Employee, EmployeeSchema } from './schemas/employee.schema';
import { Profile, ProfileSchema } from './schemas/profile.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema }]),
    MongooseModule.forFeature([{ name: Profile.name, schema: ProfileSchema }])
  ],
  providers: [EmployeeService],
  controllers: [EmployeeController],
})
export class EmployeeModule { }
