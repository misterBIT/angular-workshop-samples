import {Component, Inject, provide, OnInit, OnDestroy, HostBinding} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ForAnyOrder} from './forAnyOrder.directive';
import {ChimeSynth} from './chime-synth.component';
import {Audio} from './audio.service';
import {Random} from './random.service';

@Component({
  selector: 'wind-chimes-synth',
  template: `
    <chime-synth *forAnyOrder="let chime of chimes | async"
           [chime]=chime>
    </chime-synth>
  `,
  styles: [require('./windchimes.component.css').toString()],
  directives: [ChimeSynth, ForAnyOrder],
  providers: [provide('notes', {useValue: ['1', '2', '3', '4', '5', '6', '7', '8']})]
})
export class WindchimesSynth implements OnInit, OnDestroy {
  chimes: Observable<{x: number, y: number, note: string}[]>;
  windNoise;
  windVolume;

  constructor(random: Random,
              private audio: Audio,
              @Inject('notes') notes: string[],
              @Inject('size') size) {
    const noteSampler = random.sampler(notes);
    this.chimes = random.simpleCurve(20)
      .map(prob => prob / 5)
      .do(ws => this.windVolume.gain.value = ws / 2 + 0.05)
      .filter(ws => Math.random() < ws)
      .map(() => ({
        x: random.nextInt(0, size.width),
        y: random.nextInt(0, size.height),
        note: noteSampler()
      }))
      .bufferTime(10000, 10);
  }

  @HostBinding('style.backgroundColor')
  get bgColor() {
    const val = Math.floor(this.windVolume.gain.value * 255);
    return `rgb(${val}, ${val}, ${val})`
  }

  ngOnInit() {
    this.windNoise = this.audio.brownNoiseNode();
    this.windVolume = this.audio.gainFor(this.windNoise);
    this.windVolume.gain.value = 0;
    this.audio.startNode(this.windVolume);
  }

  ngOnDestroy() {
    this.audio.stopNode(this.windVolume);
    this.audio.stopNode(this.windNoise);
  }
}
