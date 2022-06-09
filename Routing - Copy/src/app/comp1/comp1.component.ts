import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit ,OnChanges,DoCheck,AfterContentChecked,AfterContentInit,AfterViewInit,AfterViewChecked,OnDestroy{
  DesignutilityService: any;

  // constructor(private _designServices:DesignutilityService) { 
  //   this._designServices.userName.subscribe(uname=>this.userName =uname);
  // }
  constructor() {
    console.log('console called:::::::');
  }

  ngOnInit(): void {
    console.log('nginit called::::::::');
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log("ngOn changes called"+changes['myValue'].currentValue);
  }
  ngDoCheck(): void {
      console.log('ngDoCheck called::::::');
  }
  ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked called:::::::');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentinit');
  }
  ngAfterViewInit(): void {
      console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
      console.log('ngonDestroy called:::::::');
  }
  
  // userName:string | undefined;
  // updateUserName(uname: any) {
  //   this._designServices.userName.next(uname.value);
  // }

  @Input() myValue: string = "harshil panchal";
}
