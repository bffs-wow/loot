import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../../wow-data/item.interface';
import { ZoneService } from '../../wow-data/zone.service';

@Pipe({
  name: 'zone',
})
export class ZonePipe implements PipeTransform {
  constructor(private zoneService: ZoneService) {}
  transform(value: Item, ...args: any[]): any {
    if (!value.itemId) {
      throw new Error(`Invalid ZonePipe input!`);
    }
    const zone = this.zoneService.getItemZone(value);
    if (value.source.category === 'Zone Drop') {
      return `${zone.name} (${value.source.category})`;
    }
    return `${zone.name} (${value.source.name})`;
  }
}
