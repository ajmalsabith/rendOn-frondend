import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chatserch'
})
export class ChatserchPipe implements PipeTransform {

  transform(items: any[],value:string):any[]  {

      return items.filter(element => {
        return element.toId.name.toLowerCase().includes(value) || element.fromId.name.toLowerCase().includes(value)

      });

  }

}
