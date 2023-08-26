import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filteritem: string): any[] {
    if (!items || !filteritem) {
      return items;
    }

    filteritem = filteritem.toLowerCase();

    return items.filter(item => {
      if (filteritem=='all') {
        return item.type.toLowerCase()
      }else{
        return item.type.toLowerCase().includes(filteritem);
      }
    });
  }

}
