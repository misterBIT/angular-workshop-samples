import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'countdown',
  template: ` <div id="clock" *ngIf="inputTime">
                <div> {{ timeRemaining }} </div>
              </div> `  
})

export class CountdownComponent implements OnInit {

  @Input('to') inputTime: number;
  @Output() due = new EventEmitter();

  private msRemaining: number;
  private minRemaining: number = 0;
  private secRemaining: any = 0;
  private countDownInterval: any;

  ngOnInit() {
    this.calcTimeRemaining();
    this.countDown();
  }

  calcTimeRemaining() {
    this.msRemaining = this.inputTime - Date.now();
    this.minRemaining = Math.max(0, Math.floor(this.msRemaining / 60000));
    this.secRemaining = Math.min(59, Math.max(0, +((this.msRemaining % 60000) / 1000).toFixed(0)));
  }

  get timeRemaining() {
    return `${this.as2Digits(this.minRemaining)} : ${this.as2Digits(this.secRemaining)}`;
  }

  countDown() {
    this.countDownInterval = setInterval(()=> {
      this.calcTimeRemaining();

      if (this.msRemaining <= 0) {
        clearInterval(this.countDownInterval);
        this.due.emit({});
      }
    }, 1000);
  }


  private as2Digits(time: number): string {
    return (time < 10 ? `0${time}` : time.toString());
  }

  ngOnDestroy() {
    clearInterval(this.countDownInterval);
  }
}
