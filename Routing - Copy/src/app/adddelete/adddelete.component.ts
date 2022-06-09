import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddelete',
  templateUrl: './adddelete.component.html',
  styleUrls: ['./adddelete.component.css']
})
export class AdddeleteComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  users: any = [];
  CreateUser(uname: any) {
    this.users.push({ name: uname.value });
    if(this.users.length>3){
      this.router.navigate(['products']);
    }
  }
  RemoveUser() {
    this.users.splice(this.users.length - 1);
  }

  
  RemoveItem(item: any) {
    this.users.splice(item, 1);
  }

}
