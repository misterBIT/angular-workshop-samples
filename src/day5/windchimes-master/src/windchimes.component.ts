import {Component, Inject} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ForAnyOrder} from './forAnyOrder.directive';
import {Chime} from './chime.component';
import {Random} from './random.service';

@Component({
  selector: 'wind-chimes',
  template: `
    <chime *forAnyOrder="let chime of chimes | async"
           [chime]=chime>
    </chime>
  `,
  styles: [require('./windchimes.component.css').toString()],
  directives: [Chime, ForAnyOrder]
})
export class Windchimes {
  chimes:Observable<{x: number, y: number, note: string}[]>;

  constructor(random:Random,
              @Inject('notes') notes,
              @Inject('size') size) {
    const noteSampler = random.sampler(notes);
    this.chimes = random.perlinNoise(5000)
      .map(() => ({
        x: random.nextInt(0, size.width),
        y: random.nextInt(0, size.height),
        note: noteSampler()
      }))
      .bufferTime(5000, 10);
  }

}
