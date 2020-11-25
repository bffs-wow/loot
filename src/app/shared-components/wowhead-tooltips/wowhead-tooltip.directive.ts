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
import { Loot } from '../../loot-list/models/loot.model';



@Directive({
  selector: 'a[appWowheadTooltip]',
})
export class WowheadTooltipDirective implements OnChanges {
  @HostBinding('class')
  elementClass = 'wh-padding';

  @Input('appWowheadTooltip') item: Loot;
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private wowheadTooltipsService: WowheadTooltipsService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.item.currentValue) {
      this.renderer.setAttribute(
        this.elRef.nativeElement,
        'data-wowhead',
        `item=${changes.item.currentValue.itemId}&domain=classic`
      );

      this.wowheadTooltipsService.refreshLinks();
    }
  }
}
