import {Component} from '@angular/core';

@Component({
  // Note how this component does not have a selector:
  // We don't embed this component in a parent template. We navigate to it from the outside, via a parent router
  template:  `
    <h2>Monsters Center</h2>
    <router-outlet></router-outlet>
  `
  
})
export class MonsterCenterComponent { }
 