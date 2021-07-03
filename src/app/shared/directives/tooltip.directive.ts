import { Directive, Input, ElementRef, HostListener, Renderer2 } from '@angular/core';
import {create, setPosition} from "../tooltipHandling";

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {
  @Input('tooltip') tooltipTitle: string | null = null;
  @Input() placement: string = "top";
  @Input() delay: number = 0;
  tooltip: any;
  offset = 10;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (!this.tooltip && this.tooltipTitle) { this.tooltip = this.renderer.createElement('span'); this.show(); }
  }

  @HostListener('tap')
  onTap(){
    this.onMouseEnter();
    setTimeout(()=>{this.onMouseLeave()}, 1500)
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.tooltip) { this.hide(); }
  }

  show() {
    if(this.tooltipTitle) {
      create(this.tooltip, this.renderer, this.tooltipTitle, this.delay, this.placement);
      setPosition(this.el, this.renderer, this.tooltip, this.placement, this.offset);
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
