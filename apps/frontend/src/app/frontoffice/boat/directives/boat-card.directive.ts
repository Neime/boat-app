import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[boatCard]',
  standalone: true
})
export class BoatCardDirective {

  private defaultClass: string|null = 'px-2 rounded-md border-gray-200 border-2 m-1';

  constructor(private el: ElementRef) {
    this.el.nativeElement.className = this.defaultClass;
  }

  @Input('boatCard') cardClass: string|null = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.cardClass);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.defaultClass);
  }

  private highlight(className: string|null) {
    this.el.nativeElement.className = 
      className
      || 'px-2 rounded-md border-gray-100 border-2 m-1'
    ;
  }
}
