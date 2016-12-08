import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Remote, ControlState} from './remote.service';

@Component({
  selector: 'control',
  template: `
    <h1>{{state?.state}}</h1>
    <div>Connected clients: {{state?.clientCount}}</div>
    <div>Chime delay: {{state?.delay}}</div>
    <button (click)="adjustDelay(1)">+1</button>
    <button (click)="adjustDelay(10)">+10</button>
    <button (click)="adjustDelay(-1)">-1</button>
    <button (click)="adjustDelay(-10)">-10</button>
    <button (click)="resetDelay()">Reset</button>
    <button *ngIf="isChiming()" (click)="done()">Done</button>
    <button *ngIf="!isChiming()" (click)="start()">Start</button>
    <button *ngIf="!state?.muted" (click)="mute()">Mute</button>
    <button *ngIf="state?.muted" (click)="unmute()">Unmute</button>
  `,
  styles: [require('./control.component.css').toString()]
})
export class Control implements OnInit, OnDestroy {
  private sub:Subscription;
  private state:ControlState;

  constructor(private rmt:Remote) {
  }

  ngOnInit() {
    this.sub = this.rmt.controlEvents()
      .subscribe((state) => this.state = state);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  isChiming() {
    return this.state && this.state.state === 'chiming';
  }

  done() {
    this.rmt.done();
  }

  start() {
    this.rmt.start();
  }

  mute() {
    this.rmt.mute();
  }

  unmute() {
    this.rmt.unmute();
  }

  adjustDelay(amt:number) {
    this.rmt.adjustRate(amt);
  }

  resetDelay() {
    this.rmt.resetRate();
  }


}
