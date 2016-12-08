import {Pipe} from '@angular/core';

@Pipe({
  name: 'addCommas'
})
export class AddCommasPipe {
  transform(list) {
    if(!list) return '';
    switch (list.length) {
      case 1:
        return list[0];
      case 2:
        return list.join(' and ');
      default:
        const last = list[list.length - 1];
        const remaining = list.slice(0, -1);
        return `${remaining.join(', ')}, and ${last}`;
    }
  }
}
