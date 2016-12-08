import {Component, Inject, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'audio-unlock',
  template: `
    <button (click)="go()"
            [style.transform]="getTransform()"
            [style.webkitTransform]="getTransform()">
      Start
    </button>
  `,
  styles: [require('./audio-unlock.component.css').toString()]
})
export class AudioUnlock {
  @Output() unlock = new EventEmitter<boolean>();

  constructor(@Inject('audioContext') private audioCtx,
              @Inject('size') private size) {
  }

  go() {
    const src = this.audioCtx.createBufferSource();
    src.buffer = this.audioCtx.createBuffer(1, 1, 22050);
    src.connect(this.audioCtx.destination);
    src.start(0);
    this.unlock.next(true);
  }

  getTransform() {
    return `translate(${this.size.width / 2}px, ${this.size.height / 2}px)`;
  }

}
