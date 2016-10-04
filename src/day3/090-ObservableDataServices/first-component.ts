import {Component} from '@angular/core';
import {MyService} from './my-service';

@Component({
  selector: 'first-component',
  template: `
    <div class="badge pull-right">
      <h2>{{count}}</h2>
    </div>
  `
})
export class FirstComponent {
  private count = 0;

  constructor(private _myService: MyService) { }
  
  ngOnInit() {
    this._myService.items$.subscribe(latestCollection => {
      this.count = latestCollection.length;
    });
  }
}
