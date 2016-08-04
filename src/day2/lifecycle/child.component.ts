import {Component, Input} from '@angular/core';

@Component({
  selector: 'my-child',
  template: `
  <div class="my-child">
    <div>-- child view begins --</div>
    <div class="child">{{hero}} is my hero.</div>
    <div>-- child view ends --</div>
  </div>
  `,
  styles: [
    '.child {background: Yellow; padding: 8px; }',
    '.my-child {background: LightYellow; padding: 8px; margin-top: 8px}'
  ]
})
export class ChildComponent {
  @Input() hero: string;
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/