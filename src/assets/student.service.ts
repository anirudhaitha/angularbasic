// Now, we need to add the demo data inside the student.service.ts file. 
// The data is the type of Student model which we have defined above.


import { Injectable } from '@angular/core';
import { Student } from 'src/app/teacher/models/student.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    students: Student[] = [{
        id: 1,
        name: 'Krunal',
        EnrollmentNumber: 110470116021,
        College: 'VVP Engineering College',
        University: 'GTU'
    },
    {
        id: 2,
        name: 'Rushabh',
        EnrollmentNumber: 110470116023,
        College: 'VVP Engineering College',
        University: 'GTU'
    },
    {
        id: 3,
        name: 'Ankit',
        EnrollmentNumber: 110470116022,
        College: 'VVP Engineering College',
        University: 'GTU'
    }];

    constructor() { }
}