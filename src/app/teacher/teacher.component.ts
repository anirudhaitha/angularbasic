import { Component, OnInit } from '@angular/core';
import { Teachers } from './models/teacher.model';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  teachers = Teachers;
  principle = 'kinnera';
  constructor() { }

  ngOnInit() {
  }

}
