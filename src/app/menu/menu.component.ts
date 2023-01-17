import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  // @Input() info;
  @Output() newItemEvent = new EventEmitter<string>();
  @Input() item:any;
  desplay: boolean;
  names: string[];
  constructor() {
    this.desplay = true;
    this.names = ['Home', 'about', 'gallary', 'help', 'contact'];
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  clickedButton() {
    this.desplay = !this.desplay;
  }
}
