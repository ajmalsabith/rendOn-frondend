import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: any[], sortval: string): any {
    if (!items || !sortval) {
      return items;
    }



    if (sortval === 'lowthan2000') {
      return items.filter(value => {
        return value.rentAmount < 2000;
      });
    } else if (sortval === 'morthan2000') {
      return items.filter(value => {
        return value.rentAmount >= 2000;
      });
    } else {
      return items;
    }
    


    
  }
}
