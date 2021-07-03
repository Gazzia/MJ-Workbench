import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: 'button[valid]'
})
export class ButtonValidDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = "#69c2ad"
    el.nativeElement.style.color = "#305a50"
  }

}
