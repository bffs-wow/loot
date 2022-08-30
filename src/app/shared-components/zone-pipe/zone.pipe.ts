import { Pipe, PipeTransform } from '@angular/core';
import { CsvItem } from 'src/app/tmb/models/item.interface';
import { ZoneService } from 'src/app/zone/zone.service';

@Pipe({
  name: 'zone',
})
export class ZonePipe implements PipeTransform {
  constructor(private zoneService: ZoneService) {}
  transform(value: CsvItem, ...args: any[]): any {
    if (!value?.id) {
      console.warn(`Invalid ZonePipe input!`, value);
      return ``;
    }
    const zone = this.zoneService.getItemZone(value);
    if (zone) {
      return `${zone.name} (${value.source_name})`;
    }
    return 'Unknown Source';
  }
}
