import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
      <!-- use the custom element! -->
      <custom-element [username]="username" (selected)="onSelected($event)"></custom-element>
        
      <br>
      
      <div>The Angular2 App</div>
      <button (click)="changeName('Danny')">Danny</button>
      <button (click)="changeName('Erik')">Erik</button>
  `
})
export class AppComponent {
  username = 'Danny';
  
  onSelected(e) {
    alert('This is being called from the angular component. ' + e.detail + ' Selected');    
  } 
  
  changeName(name) {
    this.username = name;
  }
}