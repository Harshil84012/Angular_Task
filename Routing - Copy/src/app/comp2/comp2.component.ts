import { Component, ContentChild, ElementRef, OnInit, AfterContentInit, Renderer2, ViewChild } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';
import { ChildComponent } from '../child/child.component';
import { TestdirectiveDirective } from '../appDirective/testdirective.directive';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit, AfterContentInit {
  [x: string]: any;
  DesignutilityService: any;

  // constructor(private _designServices:DesignutilityService) { 
  //   this._designServices.userName.subscribe(uname=>this.userName =uname);
  // }
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    // console.log(this.childparagraph);
  }
  // userName:string | undefined;
  // updateUserName(uname: any) {
  //   this._designServices.userName.next(uname.value);
  // }
  userName: string = "harshil";
  clickme(uname: any) {
    alert("hello" + this.userName);
    var text = this.renderer.createText("this is text");
    this.renderer.appendChild(this.childparagraph.nativeElement, text);
  }
  ngAfterContentInit(): void {
    console.log(this.childparagraph);
    this.renderer.setStyle(this.childparagraph.nativeElement, 'color', 'red');
  }

  @ContentChild('childCon')
  childparagraph!: ElementRef;

  @ViewChild(TestdirectiveDirective)
  myDir!: TestdirectiveDirective;


  changebg(color: any) {
    this.myDir.changebg(color);
  }
}
