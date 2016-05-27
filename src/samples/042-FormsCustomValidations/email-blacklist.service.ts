import {Injectable} from '@angular/core';

@Injectable()
export class EmailBlacklistService {

    constructor() { }
    check(email:string) {
        console.log('EmailBlacklistService is checking email: ', email);
        return email && email.indexOf('black') === -1;
    }

}