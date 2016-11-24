import {Directive, OnInit, OnDestroy} from '@angular/core';
import {LoggerService} from './logger.service';

/***************************************/
let nextId = 1;

// Spy on any element to which it is applied.
// Usage: <div my-spy>...</div>
@Directive({selector: '[my-spy]'})
export class Spy implements OnInit, OnDestroy {

  private _id = nextId++;
  private _logger:LoggerService;

  constructor(logger:LoggerService){
    this._logger = logger;
  }

  ngOnInit() {
    this._logIt(`onInit`);
  }

  ngOnDestroy() {
    this._logIt(`onDestroy`);
  }

  private _logIt(msg:string){
    this._logger.log(`Spy #${this._id } ${msg}`);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/