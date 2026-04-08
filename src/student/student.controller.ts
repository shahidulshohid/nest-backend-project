// import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
// import { StudentService } from './student.service';


// @Controller('student')
// export class StudentController {
//     constructor(private readonly studentService : StudentService) {}
//     @Get()
//     getAll() {
//         return this.studentService.getAllStudents();
//     }

//     @Get(':id')
//     getOne(@Param('id') id: string) {
//         return this.studentService.getStudentByid(Number(id))
//     }

//     @Post()
//     create(@Body() body: {name: string, age: number}) {
//         return this.studentService.createStudent(body)
//     }

//     @Put(':id')
//     update(@Param('id') id: string, @Body() body: {name : string, age : number}) {
//         return this.studentService.updateStudent(Number(id), body)
//     }

//     @Patch(':id')
//     patch(@Param('id') id: string, @Body() body: Partial<{name: string, age: number}>) {
//         return this.studentService.patchStudent(Number(id), body)
//     }

//     @Delete(':id')
//     remove(@Param('id') id: string) {
//         return this.studentService.deleteStudent(Number(id));
//     }
    
// }



import { Body, Controller, Get, Post } from "@nestjs/common";
import { StudentService } from "./student.service";
import { Student } from "./student.schema";

@Controller('student')
export class StudentController {
    constructor(private readonly studentService : StudentService) {}
    @Post()
    async addStudent(@Body() data: Partial<Student>) {
        return this.studentService.createStudent(data)
    }

    @Get()
    async getStudents(){
        return this.studentService.getAllStudents();
    }


}
