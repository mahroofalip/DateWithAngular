import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  
})
export class FirstComponent {
  constructor(public studentService: StudentService) {}
}
