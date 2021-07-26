import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private elementRef: ElementRef, private render: Renderer2) {
    /* elementRef.nativeElement.style.backgroundColor = red; */
  }
  @HostListener('click', ['$event.target']) onclick(event: any) {
    console.log(event)
  }

}
