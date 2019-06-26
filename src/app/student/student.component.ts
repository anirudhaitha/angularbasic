import { Component, OnInit, Input } from '@angular/core';
import { Teacher } from '../teacher/models/teacher.model';      // TEACHERS MODEL HAS BEEN CREATED 

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

//     @INPUT DECORATOR IS USED TO SHARE DATA FROM A PARENT COMPONENT TO CHILD COMPONENT


export class StudentComponent implements OnInit {
  @Input() teacher: Teacher;                        // teacher is taking from thee techer component (parent component)
  @Input('principle') principleName: string;        // principle is from parent component (teacher component)

  constructor() { }

  ngOnInit() {
  }

}
