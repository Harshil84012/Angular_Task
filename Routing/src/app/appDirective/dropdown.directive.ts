import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }

  @HostBinding('style.backgroundColor') bgColor = "green"
  @HostBinding('class.active')
  className!: boolean;
  @HostBinding('attr.alt') myTitle: any;

  
  @HostListener('click') myClick() {
    // alert('you clicked');
    // this.renderer.setStyle(this.el.nativeElement,'backgroundColor','blue');
    this.bgColor = 'blue';
    this.className = !this.className;

    this.myTitle="this is test title"
  }

}

