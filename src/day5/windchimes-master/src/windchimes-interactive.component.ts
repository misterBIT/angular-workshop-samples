import {Component, Inject, HostListener} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Random} from './random.service';
import {Remote} from './remote.service';
import {Samples} from './samples.service';
import {Chime} from './chime.component';
import {ThankYou} from './thank-you.component';
import {ForAnyOrder} from './forAnyOrder.directive';

@Component({
  selector: 'windchimes-interactive',
  template: `
    <div class="muted-indicator" *ngIf="muted"></div>
    <div class="hint click-hint" *ngIf="!clicked && !isDone()">click anywhere</div>
    <div class="hint touch-hint" *ngIf="!clicked && !isDone()">touch anywhere</div>
    <chime *forAnyOrder="let chime of chimes | async"
           [chime]=chime>
    </chime>
    <thank-you *ngIf="isDone()">
    </thank-you>
  `,
  styles: [require('./windchimes.component.css').toString()],
  directives: [Chime, ForAnyOrder, ThankYou]
})
export class WindchimesInteractive {
  clicks = new Subject<{x: number, y: number}>();
  noteSampler = this.random.sampler(this.notes);
  chimes = this.clicks.map(({x, y}) => ({
      x,
      y,
      note: this.noteSampler(),
      state: 'chiming',
      muted: this.muted
    })).bufferTime(5000, 10);

  clicked = false;
  state:string;
  muted:boolean;

  constructor(private random:Random,
              private remote: Remote,
              private samples:Samples,
              @Inject('notes') private notes,
              @Inject('audioContext') private audioCtx) {
    remote.controlEvents().subscribe(state => {
      this.state = state.state;
      this.muted = state.muted;
    });
  }

  @HostListener('click', ['$event'])
  onClick(event:MouseEvent) {
    if (!this.clicked) {
      // unlock audio on ios
      const src = this.audioCtx.createBufferSource();
      src.buffer = this.audioCtx.createBuffer(1, 1, 22050);
      src.connect(this.audioCtx.destination);
      src.start(0);
    }
    this.clicked = true;
    if (!this.isDone()) {
      this.clicks.next({x: event.clientX, y: event.clientY});
    }
  }

  isDone() {
    return this.state === 'done';
  }
}
