import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent {
  constructor(public studentService: StudentService) {}
}
