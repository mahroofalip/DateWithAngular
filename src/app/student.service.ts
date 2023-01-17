import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  public studentList: { id: number; name: string; mark: number; mark2: number }[] = [
    { id: 1, name: 'mahroof', mark: 50, mark2: 15 },
    { id: 2, name: 'mahroof', mark: 50, mark2: 85 },
    { id: 3, name: 'mahroof', mark: 50, mark2: 15 },
    { id: 4, name: 'mahroof', mark: 50, mark2: 25 },
    { id: 5, name: 'mahroof', mark: 50, mark2: 18 },
  ];

  constructor() {}
  calculateTotal(student:any){
   alert(student.mark+student.mark2)
  }
}
