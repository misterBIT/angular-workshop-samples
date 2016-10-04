import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/share';
import {Subject} from 'rxjs';

@Injectable()
export class MyService {
  public items$ = new Subject<Array<string>>(); 
  
  // private _collectionObserver: any;
  private _collection = new Array<string>();

  constructor() {
    
    // this.collection$ = new Observable(observer => {
    //   this._collectionObserver = observer;
    // }).share();
  }
  
  add(value: string) {
    this._collection.push(value);
    this.items$.next(this._collection);
  }
  
}