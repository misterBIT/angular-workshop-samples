import { Component } from '@angular/core';
@Component({
  selector: 'demo-builtin-directives',
  styles: [`.active {
      color: red
  }`, `.disabled {
      background: grey
  }`],
  template: `
      <h1 [ngStyle]="{'font-style': style, 'font-size': size, 'font-weight': weight}">
          God is a DJ
      </h1>
      <hr>
      <label>Italic: <input type="checkbox" (change)="changeStyle($event)"></label>
      <label>Bold: <input type="checkbox" (change)="changeWeight($event)"></label>
      <label>Size: <input type="text" [value]="size" (keyup.enter)="size = $event.target.value"></label>
      <hr>
      <button [ngClass]="{active: isOn, disabled: isDisabled}"
              (click)="toggle()">
          Click me!
      </button>
      <input [attr.width]="width" (keyup.enter)="toeChoice = $event.target.value" [value]="toeChoice"/>
      <hr>
      <h1 [ngSwitch]="toeChoice">
          <ng-template [ngSwitchCase]="'Eenie'">Eenie</ng-template>
          <ng-template [ngSwitchCase]="'Meanie'">Meanie</ng-template>
          <ng-template [ngSwitchCase]="'Miney'">Miney</ng-template>
          <ng-template [ngSwitchCase]="'Moe'">Moe</ng-template>
          <ng-template ngSwitchDefault>Other</ng-template>
      </h1>
      <ng-template ngIf="toeChoice=='secret';else not_allowed">
          <div>You know the secret!!</div>
      </ng-template>
      <ng-template #not_allowed>
          <div>You Don't know!!!</div>
      </ng-template>
  `
})
export class DemoBuiltinDirectives {
  width = '200px';
  style = 'normal';
  weight = 'normal';
  size = '20px';
  isOn = true;
  isDisabled = false;
  toeChoice = 'Moe';

  changeStyle($event: any) {
    this.style = $event.target.checked ? 'italic' : 'normal';
  }

  changeWeight($event: any) {
    this.weight = $event.target.checked ? 'bold' : 'normal';
  }

  toggle() {
    this.isOn = !this.isOn;
    this.isDisabled = !this.isDisabled;
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          console.log('Timeout Done');
          this.width = '100px';
          resolve(42);
          // reject('Big Badabum');
        },
        1000
      );
    })
  }


// }).then(() => {
//     throw new Error("hmm");
// }).catch(err => {
//     return Promise.all([timeout(100), timeout(200)]);
// })


}