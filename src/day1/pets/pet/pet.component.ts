import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {PetModel} from './pet.model';

@Component({
  selector: 'pet',
  template: `
    <style>
        img {max-height:200px;}
        .awake {color:darkblue}
    </style>
    <section [class.awake]="petModel.awake"  >
        <h4>{{petModel.name | uppercase}}</h4>
        <countdown *ngIf="petModel.awake" [to]="petModel.nextFeedAt" (due)="feedingDue()"></countdown>
        <img [src]="petModel.imgUrl" alt="">
        <input type="checkbox" [checked]="petModel.awake" (change)="toggle.emit(petModel)" /> Awake? 
    </section>` ////// we bind checkboxes to the checked property!

})
export class PetComponent {

  private time: any;

  ngOnInit() {
  }

  @Input()
  petModel: PetModel;

  @Output()
  toggle = new EventEmitter<PetModel>(); //better be typed!


  feedingDue() {
    console.log('Pet is going to sleep!');
    // this.petModel.awake = false;
    this.toggle.emit(this.petModel);
  }

}
