import { Component, trigger, style, animate, state, transition, ViewContainerRef, AnimationKeyframesSequenceMetadata } from '@angular/core';
import {NgStyle} from '@angular/common';
@Component({
    selector: 'demo-scrubbing',
    template: `
<nav>
  <button *ngIf="_boxState !== 'top'" (click)="gotoTop()">Top</button>
  <button *ngIf="_boxState !== 'bottom'" (click)="gotoBottom()">Bottom</button>
  <button (click)="togglePause()">
    {{ paused ? 'Resume' : 'Pause' }} 
  </button>
  <input type="range" (input)="scrub($event.target.value)" min="0" max="100" [disabled]="!animationsRunning" />
</nav>

<div class="box" [@boxAnimation]="boxState"></div>

    `,
  styleUrls: ['style.css'],
  animations: [
    trigger('boxAnimation', [
      state('void', style({ top: '0', left: '0'})),
      state('top', style({ top: '0', left: '0' })),
      state('bottom', style({ top: '400px', left: '400px' })),

      transition('top => bottom', [
        style({ 'background': 'red' }),
        animate(5000, new AnimationKeyframesSequenceMetadata([
          style({ 'background': 'lightblue', 'transform':'scale(1)' }),
          style({ 'transform': 'scale(1.5)', 'top':'200px' }),
          style({ 'transform': 'rotate(125deg)', 'left':'400px' }),
          style({ 'top':'400px', 'left':'400px', 'background': 'darkgreen', 'transform': 'scale(1)' })
        ]))
      ]),

      transition('bottom => top', [animate(500)])
    ])
  ]
})
export class DemoScrubbingComponent {
  private _boxState;
  private _listeners = [];
  public paused = false;
  public animationsRunning = true;

  constructor(private _ref: ViewContainerRef) {
    this.gotoTop();
    this._listeners.push(() => {
      alert('done');
    });
  }

  getPlayer(): any {
    try {
      // Do not work, API changed
      // return this._ref['_element'].parentView.viewChildren[0].activeAnimations['boxAnimation'];
      console.log(this._ref['_element'].parentView.viewChildren[0]);
      return this._ref['_element'].parentView.viewChildren[0].animationPlayers.getAllPlayers()[0];


    } catch(e) {
      return null;
    }
  }

  pauseAnimation() {
    var player = this.getPlayer();
    if (player) {
      player.pause();
    }
    this.paused = true;
  }

  resumeAnimation() {
    var player = this.getPlayer();
    if (player) {
      player.play();
    }
    this.paused = false;
  }

  togglePause() {
    var player = this.getPlayer();
    if (this.paused) {
      this.resumeAnimation();
    } else {
      this.pauseAnimation();
    }
  }

  get boxState() {
    return this._boxState;
  }

  gotoTop() {
    this._boxState = 'top';
    this.setupListener();
  }

  gotoBottom() {
    this._boxState = 'bottom';
    this.setupListener();
  }

  scrub(value) {
    this.pauseAnimation();
    value /= 100;
    var player = this.getPlayer();
    if (player) {
      player.setPosition(value);
    }
  }

  setupListener() {
    requestAnimationFrame(() => {
      var player = this.getPlayer();
      if (player) {
        this.animationsRunning = true;
        this.paused = false;
        player.onDone(() => {
          this.animationsRunning = false;
          this._listeners.forEach(listener => listener());
        });
      }
    });
  }
  
}
   