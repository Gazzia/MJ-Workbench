import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: 'button[warning]'
})
export class ButtonWarningDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = "#bf596c"
    el.nativeElement.style.color = "rgb(83, 46, 53)"
  }

}
