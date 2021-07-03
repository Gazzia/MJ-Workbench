import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {create, setPosition} from "../tooltipHandling";

@Directive({
  selector: '[shouldBeMJ]'
})
export class ShouldBeMJDirective {

  tooltipTitle = "Vous devez être MJ";
  @Input() placement: string = "top";
  @Input() delay: number = 0;
  tooltip: any;
  offset = 10;
  isOut = true;

  constructor(private auth: AngularFireAuth, private el: ElementRef, private renderer: Renderer2) {
    // @ts-ignore
    this.update();
    auth.user.subscribe(u => {
      this.isOut = u == null
      this.update();
    })
  }

  update(){
    this.el.nativeElement.disabled = this.isOut;
  }


  @HostListener('mouseenter')
  onMouseEnter() {
    if (!this.tooltip && this.isOut) { this.tooltip = this.renderer.createElement('span'); this.show(); }
  }


  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.tooltip) { this.hide(); }
  }

  show() {
    if(this.tooltipTitle) {
      create(this.tooltip, this.renderer, this.tooltipTitle, this.delay, this.placement);
      setPosition(this.el, this.renderer, this.tooltip, this.placement, this.offset)
      this.renderer.addClass(this.tooltip, 'ng-tooltip-show');
    }
  }

  hide() {
    this.renderer.removeClass(this.tooltip, 'ng-tooltip-show');
    window.setTimeout(() => {
      this.renderer.removeChild(document.body, this.tooltip);
      this.tooltip = null;
    }, this.delay);
  }

}
