import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {
  @HostBinding('style.backgroundColor') bgColor = 'white';
  @HostBinding('style.color') color = 'red';



  constructor() { }
  @HostListener('mouseenter') onMouseEnter() {
    this.bgColor = 'grey';
    this.color = 'white';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = 'white';
    this.color = 'black';
  }

}
