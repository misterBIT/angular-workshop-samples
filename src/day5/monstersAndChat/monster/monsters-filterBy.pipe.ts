import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterBy',
  pure: false
})

export class MonstersFilterByPipe implements PipeTransform {
  transform(list: any[], filter: any): any {
    if (!list) {return [];}
    if (!filter) {return list;}
    return list.filter(item=>{
      return (filter.byName.length === 0 || item.name.toLowerCase()
              .indexOf(filter.byName.toLowerCase()) !== -1) &&
             (!filter.byPower || +item.power === +filter.byPower);
    });
  }
}
