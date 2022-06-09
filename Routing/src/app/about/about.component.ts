import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  value!: string;
  submitValue(val: any) {
    this.value = val.value;
  }
  isExist: boolean = true;
  destroy() {
    this.isExist = false;
  }
  value1 = "this is test "
  date = new Date();

  // nameArr=[
  //   'harshil panchal',
  //   'mohit',
  //   'kishan',
  //   'pratik',
  //   'amee',
  //   'vivek',
  //   'nivet'
  // ]
  nameSearch: string = '';

  productArr: any[] = [
    { sno: 1, name: 'Tv(Mi)', price: '7000 Rs', availability: 'Available' },
    { sno: 2, name: 'Laptop(Hp)', price: '4000 Rs', availability: 'Not Available' },
    { sno: 3, name: 'WashingMachine(Samsung)', price: '9000 Rs', availability: 'Available' },


  ]

  onaddProduct(add: any) {
    this.productArr.push({
      sno: 4, name: add.value, price: '9000 Rs', availability: 'Available'
    })
  }
}
