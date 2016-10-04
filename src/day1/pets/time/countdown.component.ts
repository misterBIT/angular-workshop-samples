import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'countdown',
  template: ` <div id="clock">
            <span>Time To Live:</span>
            <div *ngIf="isAwake">{{getTimeRemaining()}}</div>
          </div> `  // I would format in a method and bind to it - for testability,also format out of the getter
})

export class CountdownComponent implements OnInit {

  //== I/O==
  @Input() inputTime: number;
  @Input() isAwake: boolean;
  @Output() due = new EventEmitter();

  //== Data Members ==
  private msRemaining: number;
  private minRemaining: number = 0;
  private secRemaining: any = 0;
  private countDownInterval: any;

  //== Methods ==
  constructor() {
  }

  ngOnInit() {
    this.calcTimeRemaining();
    this.countDown();
  }

  ngOnChanges(changes) {
    if (changes.isAwake) {
      if (changes.isAwake.currentValue) {
        this.calcTimeRemaining();
        this.countDown();
      } else {
        clearInterval(this.countDownInterval);
      }
    }

  }

  calcTimeRemaining() {
    this.msRemaining = this.inputTime - Date.now();
    this.minRemaining = Math.floor(this.msRemaining / 60000);
    this.secRemaining = ((this.msRemaining % 60000) / 1000).toFixed(0);
  }

  getTimeRemaining() {
    return `${CountdownComponent.print2Digits(this.minRemaining)} : ${CountdownComponent.print2Digits(this.secRemaining)}`;
  }

  countDown() {
    this.countDownInterval = setInterval(()=> {
      this.msRemaining -= 1000;
      this.calcTimeRemaining();

      if (this.msRemaining <= 0) {
        clearInterval(this.countDownInterval);
        this.due.emit({});
      }
    }, 1000);
  }


  private static print2Digits(time: number): string {
    return (time < 10 ? `0${time}` : time.toString());
  }
}
