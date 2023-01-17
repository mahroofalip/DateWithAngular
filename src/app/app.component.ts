import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public title = 'paripoornna';
  data ={
    name:"mahroof ali",
    domain:"mern stack"
  } 

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
  // data ="haallo"
  alignMent(){
    return "center"
  }
   clicked =()=>{
    alert("button clicked")
  }


}
