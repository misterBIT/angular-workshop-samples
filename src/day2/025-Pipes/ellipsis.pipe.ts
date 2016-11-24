import {Pipe} from '@angular/core';

const SIZE = 50;

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe {
  transform(str) {
    const withoutHtml = str.replace(/(<([^>]+)>)/ig);
    if (str.length >= SIZE)
      return withoutHtml.slice(0, SIZE) + '...';
    return withoutHtml;
  }
}
