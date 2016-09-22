import {Pipe} from '@angular/core';
import {DatePipe} from "@angular/common";

@Pipe({
    name: "dateIt"
})
export class DateItPipe {

    constructor(private datePipe: DatePipe) {}

    transform(value: any): string {
        let format = "yyyy-MM-dd";
        return this.datePipe.transform(new Date(value), format);
    }
}
