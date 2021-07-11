import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
interface Iuser {
  name: string;
  age: number;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input()
  users: Iuser[] = [];

  @Output()
  userSelected: EventEmitter<Iuser> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onBtnClick(user: Iuser) {
    console.log(user);
    this.userSelected.emit(user);
  }

}
