import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  OnChanges,
  SimpleChanges,
  OnInit,
  HostBinding,
} from '@angular/core';
import { WowheadTooltipsService } from './wowhead-tooltips.service';

@Directive({
  selector: 'a[appWowheadTooltip]',
})
export class WowheadTooltipDirective implements OnChanges {
  @HostBinding('class')
  elementClass = 'wh-padding';

  @Input('appWowheadTooltip') item: any;
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private wowheadTooltipsService: WowheadTooltipsService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.item.currentValue) {
      const itemId =
        changes.item.currentValue.item_id || changes.item.currentValue.id;
      if (!itemId) {
        console.warn(`appWowheadTooltip: Input item does not have a usable id attribute!`, changes);
      }
      this.renderer.setAttribute(
        this.elRef.nativeElement,
        'data-wowhead',
        `item=${itemId}&domain=cata`
      );

      this.wowheadTooltipsService.refreshLinks();
    }
  }
}
