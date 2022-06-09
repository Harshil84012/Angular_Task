import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, Renderer2, HostListener } from '@angular/core';
import { reduce } from 'rxjs';
import { ChildComponent } from '../child/child.component';
import { Comp2Component } from '../comp2/comp2.component';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private renderer: Renderer2) { }

  // statusOnline: boolean = true;
  // products = [
  //   { name: 'laptop' },
  //   { name: 'tc' },
  //   { name: 'washingmachine' },

  // ];

  userName: string = "harshil";
  @ViewChild('box')
  box!: ElementRef;

  ngOnInit(): void {
    // $(window).scroll(function(){
    //   console.log("window scrolloing:::::;");
    // });

    
  }
  ngAfterViewInit(): void {
    //     console.log(this.box);
    //     this.box.nativeElement.style.backgroundColor="blue";
    //     this.box.nativeElement.classList="boxblue";
    //this.box.nativeElement.innerHTML="this is modified HTML";
    this.renderer.setStyle(this.box.nativeElement, 'backgroundColor', 'yellow');
    this.renderer.setStyle(this.box.nativeElement, 'color', 'green');
    this.renderer.addClass(this.box.nativeElement,'myClass',);
    this.renderer.setAttribute(this.box.nativeElement,'title','this is test title' )

  }

  @ViewChild(Comp2Component)
  Child: any = Comp2Component;
  changechildproperty() {

    this.Child.userName = "panchal";

  }
  callchildmethod() {
    this.Child.clickme();

  }

  // @HostListener('click')  myclick(){
  //   alert('clicked');
  // }
  // @HostListener('window:scroll',['$event'])myScroll(){
  //   console.log("normal scrolling:::::");
  // }

}

