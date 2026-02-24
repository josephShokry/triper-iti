import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgHover]',
})
export class ImgHover {

  constructor(private el: ElementRef) { }

  @HostListener('mouseover')
  onMouseEnter() {
    this.el.nativeElement.style.transform = 'scale(1.1)';
    this.el.nativeElement.style.transition = 'transform 0.3s';
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.el.nativeElement.style.transform = 'none';
    this.el.nativeElement.style.boxShadow = 'none';
  }
}
