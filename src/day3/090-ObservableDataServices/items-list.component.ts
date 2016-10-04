import {Component} from '@angular/core';
import {MyService} from './my-service';

@Component({
  selector: 'items-list',
  template: `
    <div class="well">
      <h2>List of Things</h2>
      <div *ngFor="let elem of myArray">{{ elem }}</div>
      <input type="text" #txt (keyup.enter)="add(txt)">
      <button (click)="add(txt)">Add</button>  
    </div>
  `
})
export class ItemsListComponent {
  private myArray = new Array<string>();
  
  constructor(private _myService: MyService) { }
  
  ngOnInit() {
    this._myService.items$.subscribe(latestCollection => {
      this.myArray = latestCollection;
    });
  }

  add(el) {
    this._myService.add(el.value);
    el.value = '';
  }
}
