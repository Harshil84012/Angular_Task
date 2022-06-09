import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTestdirective]'
})
export class TestdirectiveDirective {


  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
  }

  changebg(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }



  @HostBinding('style.backgroundColor') bgColor = "green"
  @HostBinding('class.myClass')
  className!: boolean;
  @HostBinding('attr.alt') myTitle: any;


  @HostListener('click') myClick() {
    // alert('you clicked');
    // this.renderer.setStyle(this.el.nativeElement,'backgroundColor','blue');
    this.bgColor = 'blue';
    this.className = true;
    this.myTitle="this is test title"
  }

  @HostListener('mouseover') myMouse() {
    // alert('you mouseOver');

  }

  @HostListener('mouseoout') myMouse1() {
    //alert('you mouseOut');
  }
}


