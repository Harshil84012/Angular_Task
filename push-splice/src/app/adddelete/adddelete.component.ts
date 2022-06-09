import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adddelete',
  templateUrl: './adddelete.component.html',
  styleUrls: ['./adddelete.component.css']
})
export class AdddeleteComponent implements OnInit {

  constructor() {


  }

  ngOnInit(): void {
  }

  users: any = [];
  CreateUser(uname: any) {
    this.users.push({ name: uname.value });

  }
  RemoveUser() {
    this.users.splice(this.users.length - 1);
  }
  RemoveItem(item: any) {
    this.users.splice(item, 1);
  }
}
