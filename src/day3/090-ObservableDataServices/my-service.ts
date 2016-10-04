import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs';

@Injectable()
export class MyService {
  public items$ = new Subject<Array<string>>(); 
  
  private _items = new Array<string>();

  constructor() {}
  
  add(value: string) {
    this._items.push(value);
    this.items$.next(this._items);
  }
  
}