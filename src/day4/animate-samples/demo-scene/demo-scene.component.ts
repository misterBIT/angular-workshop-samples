import { Component, trigger, style, animate, state, transition, ViewContainerRef, AnimationKeyframesSequenceMetadata } from '@angular/core';
import {NgStyle} from '@angular/common';
@Component({
    selector: 'demo-scene',
    styleUrls: ['style.css'],
    template: `
  <nav>
    <button (click)="setEndState()">Animate</button>
    <button (click)="setStartState()">Reset</button>
    <input type="range" (input)="scrub($event.target.value)" min="0" max="100" [disabled]="!animationsRunning" />
    <button (click)="togglePause()">
          {{ paused ? 'Resume' : 'Pause' }} 
    </button>

</nav>
<div id="sky" [@sceneState]="skyState">

  <div id="cloud" [@sceneState]="cloudState">
    <div class="cloud cloud-1"></div>
    <div class="cloud cloud-2"></div>
    <div class="cloud cloud-3"></div>
  </div>

  <div id="sun" [@sceneState]="sunState"></div>

  <div id="moon" [@sceneState]="moonState">
    <div class="moon">
    </div>
    <div class="moon moon-2">
    </div>
  </div>

  <div id="ground" [@sceneState]="groundState"></div>

</div>

    `,

  animations: [
    trigger('sceneState', [
      // state('void', style({ top: '0', left: '0'})),
      // state('start', style({})),
      // state('end', style({})),

      transition('skyStart => end', [
        animate('10s ease', new AnimationKeyframesSequenceMetadata([
          style({ 'background': '#525252' }),
          style({ 'background': '#6293e5' }),
          style({ 'background': '#6293e5' }),
          style({ 'background':'#525252' })
        ]))
      ]),
      transition('groundStart => end', [
        animate('10s ease', new AnimationKeyframesSequenceMetadata([
          style({ 'background': '#6c5228' }),
          style({ 'background': '#48a037' }),
          style({ 'background': '#48a037' }),
          style({ 'background':'#6c5228' })
        ]))
      ]),
      transition('sunStart => end', [
        animate('10s ease-in', new AnimationKeyframesSequenceMetadata([
          style({ 'background': '#f00', 'bottom' : 0, 'left' : 340 }),
          style({ 'background': '#ffd630', 'bottom' : 340, 'left' : 340 }),
          style({ 'background': '#ffd630' , 'bottom' : 340, 'left' : 40 }),
          style({ 'background':'#f00' , 'bottom' : 0, 'left' : 40 })
        ]))
      ]),
      transition('cloudStart => end', [
        animate('10s', new AnimationKeyframesSequenceMetadata([
          style({ 'opacity': 0, 'left' : -100 }),
          style({ 'opacity': 1, 'left' : 60 }),
          style({ 'opacity': 1, 'left' : 100 }),
          style({ 'opacity': 0, 'left' : 500 })
        ]))
      ]),
      transition('moonStart => end', [
        animate('10s ease-in', new AnimationKeyframesSequenceMetadata([
          style({ 'opacity': 0, 'left' : -100 }),
          style({ 'opacity': 0, 'left' : -100 }),
          style({ 'opacity': 0, 'left' : -100 }),
          style({ 'opacity': 1, 'left' : 50 })
        ]))
      ]),

      // transition('end => *', [animate(2000)]),
      transition('end => *', [
        style({ transform: 'translate3d(-100%, 0, 0)' }),
        animate('350ms ease-out')
      ])
    ])
  ]
})
export class DemoSceneComponent {
  private skyState;
  private groundState;
  private sunState;
  private cloudState;
  private moonState;

  private _listeners = [];
  public paused = false;
  public animationsRunning = true;

  constructor(private _ref: ViewContainerRef) {
    this.setStartState();
    this._listeners.push(() => {
      console.log('Animation Done');
    });
  }

setStartState() {
  this.skyState      = 'skyStart';
  this.groundState   = 'groundStart';
  this.sunState      = 'sunStart';
  this.cloudState    = 'cloudStart';
  this.moonState     = 'moonStart';

}
setEndState() {
    this.skyState       = 'end';
    this.groundState    = 'end';
    this.sunState       = 'end';
    this.cloudState     = 'end';
    this.moonState      = 'end';
    this.setupListener();
}
getAllPlayers(): any {
    try {
      return this._ref['_element'].parentView.viewChildren[0].animationPlayers.getAllPlayers();
    } catch(e) {
      return [];
    }
  }

  pauseAnimation() {
    this.getAllPlayers().forEach(player=>player.pause());
    this.paused = true;
  }

  resumeAnimation() {
    this.getAllPlayers().forEach(player=>player.play());
    this.paused = false;
  }

  togglePause() {
    if (this.paused) {
      this.resumeAnimation();
    } else {
      this.pauseAnimation();
    }
  }

  scrub(value) {
    this.pauseAnimation();
    value /= 100;
    this.getAllPlayers().forEach(player=>player.setPosition(value));
  }

  setupListener() {
    requestAnimationFrame(() => {
      var player = this.getAllPlayers()[0];
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
   