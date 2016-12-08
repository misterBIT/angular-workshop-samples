import {provideRouter, RouterConfig} from '@angular/router';
import {Windchimes} from './windchimes.component';
import {WindchimesRemote} from './windchimes-remote.component';
import {WindchimesInteractive} from './windchimes-interactive.component';
import {WindchimesSynth} from './windchimes-synth.component';
import {Control} from './control.component';
import {MarkovChimes} from './markovchimes.component';

export const routes: RouterConfig = [
  {path: '', component: WindchimesInteractive},
  {path: 'remote', component: WindchimesRemote},
  {path: 'play', component: Windchimes},
  {path: 'synth', component: WindchimesSynth},
  {path: 'markov', component: MarkovChimes},
  {path: 'ctrl', component: Control}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
