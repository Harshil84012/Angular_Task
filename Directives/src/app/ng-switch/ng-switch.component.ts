import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedProduct!: string;
  getProductValue(val:any){
    console.log(val.target.value);
    this.selectedProduct=val.target.value;
  }
  

}
