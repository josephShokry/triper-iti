import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true,
})
export class Hover {
  
  constructor(private el: ElementRef) { }

  @HostListener('mouseover')
  onMouseEnter() {
    this.el.nativeElement.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.5)';
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.el.nativeElement.style.boxShadow = 'none';
  }
}
