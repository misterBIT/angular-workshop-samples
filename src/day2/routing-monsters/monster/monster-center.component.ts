import {Component}     from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {MonsterService}         from './monster.service';

@Component({
  // Note how this component does not have a selector:
  // We don't embed this component in a parent template. We navigate to it from the outside, via a parent router
  template:  `
    <h2>Monsters Center</h2>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  // Providing at this level, creates a singleton for it's child routes
  providers:  [MonsterService],
  
})
export class MonsterCenterComponent { }
