import { Component, OnInit, Input } from '@angular/core';
interface IUser {
  name: string;
  age: number;
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input()
  Info!: IUser;

  constructor() { }

  ngOnInit(): void {
  }

}
