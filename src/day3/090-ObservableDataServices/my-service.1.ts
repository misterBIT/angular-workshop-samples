import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';

@Injectable()
export class MyService {
  public collection$: any; //Observable<Array<string>>;
  private _collectionObserver: any;
  private _collection = new Array<string>();

  constructor() {

    
    this.collection$ = new Observable(observer => {
      this._collectionObserver = observer;
    }).share();
  }
  
  add(value: string) {
    this._collection.push(value);
    this._collectionObserver.next(this._collection);
  }
  
}