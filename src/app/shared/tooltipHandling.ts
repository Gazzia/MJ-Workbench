import {ElementRef, Renderer2} from "@angular/core";

export const create = (tooltip: any, renderer: Renderer2, tooltipTitle: string, delay: number, placement: string) => {

  renderer.appendChild(
    tooltip,
    renderer.createText(tooltipTitle || "") // textNode
  );

  renderer.appendChild(document.body, tooltip);

  renderer.addClass(tooltip, 'ng-tooltip');
  renderer.addClass(tooltip, `ng-tooltip-${placement}`);

  renderer.setStyle(tooltip, '-webkit-transition', `opacity ${delay}ms`);
  renderer.setStyle(tooltip, '-moz-transition', `opacity ${delay}ms`);
  renderer.setStyle(tooltip, '-o-transition', `opacity ${delay}ms`);
  renderer.setStyle(tooltip, 'transition', `opacity ${delay}ms`);
}

export const setPosition = (el: ElementRef<any>, renderer: Renderer2, tooltip: any, placement: string, offset: number) =>
  {
  const hostPos = el.nativeElement.getBoundingClientRect();

  const tooltipPos = tooltip.getBoundingClientRect();

  const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  let top, left;

  if (placement === 'top') {
    top = hostPos.top - tooltipPos.height - offset;
    left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
  }

  if (placement === 'bottom') {
    top = hostPos.bottom + offset;
    left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
  }

  if (placement === 'left') {
    top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
    left = hostPos.left - tooltipPos.width - offset;
  }

  if (placement === 'right') {
    top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
    left = hostPos.right + offset;
  }

  renderer.setStyle(tooltip, 'top', `${top + scrollPos}px`);
  renderer.setStyle(tooltip, 'left', `${left}px`);
}
