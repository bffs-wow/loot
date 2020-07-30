import { Directive, Input, ElementRef, Renderer2, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Loot } from '../loot-list/models/loot.model';

declare var $WowheadPower: any

@Directive({
  selector: 'a[appWowheadTooltip]'
})
export class WowheadTooltipDirective implements OnChanges {
  @Input('appWowheadTooltip') item: Loot;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.item.currentValue) {
      this.renderer.setAttribute(this.elRef.nativeElement, 'data-wowhead', `item=${changes.item.currentValue.id}&domain=classic`);

      $WowheadPower.refreshLinks();
    }
    
  }
}
