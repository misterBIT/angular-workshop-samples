import {Component, Inject, Input, OnInit, OnDestroy, trigger, transition, animate, style, group} from '@angular/core';
import {Samples} from './samples.service';
import {Audio} from './audio.service';

@Component({
  selector: 'chime',
  template: `
    <div class="ring {{chime.note}}" @expand="any"
         [style.left.px]="chime.x - 300"
         [style.top.px]="chime.y - 300">
    </div>
    <div class="light" @flash="any"
         [style.left.px]="chime.x - 300"
         [style.top.px]="chime.y - 300">
    </div>
  `,
  styles: [require('./chime.component.css').toString()],
  animations: [
    trigger('expand', [
      transition('void => *', [
        style({opacity: 1, transform: 'scale3d(.1,.1,.1) translateZ(0)'}),
        group([
          animate('5s',
            style({opacity: 0})),
          animate('5s cubic-bezier(0,.79,.13,.71)',
            style({transform: 'scale3d(1,1,1) translateZ(0)'}))
        ])
      ])
    ]),
    trigger('flash', [
      transition('void => *', [
        style({opacity: 1, transform: 'scale3d(.1,.1,.1) translateZ(0)'}),
        animate('0.05s ease-in',
          style({opacity: 1, transform: 'scale3d(1,1,1) translateZ(0)'})
        ),
        animate('1s ease-out',
          style({opacity: 0, transform: 'scale3d(0,0,0) translateZ(0)'})
        )
      ])
    ])
  ]
})
export class Chime implements OnInit, OnDestroy {
  @Input() chime:{x: number, y: number, note: string};
  stopAudio:Function;

  constructor(private samples:Samples,
              private audio:Audio,
              @Inject('size') private size) {
  }

  ngOnInit() {
    this.samples.getSample(this.chime.note).then(sample => {
      this.stopAudio = this.audio.play(sample, (this.chime.x / this.size.width) * 2 - 1);
    });
  }

  ngOnDestroy() {
    if (this.stopAudio) {
      this.stopAudio();
    }
  }

}
