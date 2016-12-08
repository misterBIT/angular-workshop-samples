import {Component, Inject, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ForAnyOrder} from './forAnyOrder.directive';
import {AudioUnlock} from './audio-unlock.component';
import {Chime} from './chime.component';
import {ThankYou} from './thank-you.component';
import {Random} from './random.service';

@Component({
  selector: 'windchimes-remote',
  template: `
    <chime [style.display]="areChimesVisible() ? 'block': 'none'"
          *forAnyOrder="let chime of chimes"
          [chime]="chime">
    </chime>
    <audio-unlock *ngIf="!unlocked" (unlock)="onUnlocked()">
    </audio-unlock>
    <thank-you *ngIf="unlocked && isDone()">
    </thank-you>
  `,
  styles: [require('./windchimes.component.css').toString()],
  directives: [Chime, AudioUnlock, ThankYou, ForAnyOrder]
})
export class WindchimesRemote implements OnDestroy {
  chimes:{x: number, y: number, note:string, state: string}[];
  unlocked:boolean;
  sub:Subscription;

  constructor(random:Random, @Inject('size') size) {
    this.sub = random.remote()
      .map((chime) => ({
        x: size.width / 2,
        y: size.height / 2,
        note: chime.note,
        state: chime.state
      }))
      .windowTime(5000, 100)
      .flatMap(window => window.toArray())
      .subscribe(c => this.chimes = c);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onUnlocked() {
    this.unlocked = true;
  }

  isDone() {
    return this.chimes && this.chimes.length && this.chimes[this.chimes.length - 1].state === 'done';
  }

  areChimesVisible() {
    return this.unlocked && !this.isDone();
  }

}
