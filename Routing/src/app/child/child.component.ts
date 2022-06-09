import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() placeholderText: string = "harshil";
  @Input() productSelected: boolean = false;
  @Input() selectedProduct!: string;
  @Output() addedProducts =new EventEmitter<any>();
  
  onaddProducts() {
    this.addedProducts.emit(this.selectedProduct);

  }
  



}
