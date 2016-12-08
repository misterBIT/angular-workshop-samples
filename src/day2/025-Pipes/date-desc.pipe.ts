import {Pipe, PipeTransform} from '@angular/core';


@Pipe({name: 'dateDesc'})
export class DateDescPipe implements PipeTransform {

    transform(value:Date, args:string[]) : any {
        var past = value.getTime();
        var diff = Date.now() - past;

        if (diff < 1000*60*60)          return 'Just now';
        if (diff < 1000*60*60*24+1000)  return 'Today';
        if (diff < 1000*60*60*24*7)     return 'This week';
        return 'At: ' +  value.toDateString();
    }

}