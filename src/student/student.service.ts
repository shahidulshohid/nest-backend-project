import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private Students = [
        { id: 1, name: 'John Doe', age: 20, },
        { id: 2, name: 'babu', age: 21, },
        { id: 3, name: 'islma', age: 25, },
        { id: 4, name: 'baki', age: 26, },
    ]

    getAllStudents() {
        return this.Students;
    }

    getStudentByid(id: number) {
        const student = this.Students.find((student) => student.id === id)
        if (!student) throw new NotFoundException("Student not found!")
        return student;
    }

    //post
    createStudent(data: { name: string, age: number }) {
        const newStudent = {
            id: Date.now(),
            ...data,
        }
        this.Students.push(newStudent);
        return newStudent;
    }

    // put 
    updateStudent(id: number, data: { name: string, age: number }) {
        const index = this.Students.findIndex((student) => student.id === id);
        if (index === -1) throw new NotFoundException("Student not found!");
        this.Students[index] = { id, ...data };
        return this.Students[index]
    }

    // patch
    patchStudent(id: number, data: Partial<{ name: string, age: number }>) {
        const student = this.getStudentByid(id);
        Object.assign(student, data);
        return student;
    }

    // delete
    deleteStudent(id: number) {
        const index = this.Students.findIndex((student) => student.id === id);
        if (index === -1) throw new NotFoundException("Student not found!");
        const deleted = this.Students.splice(index, 1);
        return { message: "Student deleted successfully", Students: deleted[0] }
    }
}
