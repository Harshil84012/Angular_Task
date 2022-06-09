import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  [x: string]: any;

  constructor() { }

  ngOnInit(): void {
  }
 


  myval:string="harshil";
  myText:string="asdf";

  productSelected: boolean = false;
  selectedProduct!: string;
  addedProducts: any

  onselectproduct(product: any) {
    this.productSelected = true;
    this.selectedProduct = product;

  }
  onaddProducts(proData:any){
   this['addedProducts']=proData; 
  }
}
