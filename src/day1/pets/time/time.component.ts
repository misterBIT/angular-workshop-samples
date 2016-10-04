import {Component, OnInit, OnDestroy} from '@angular/core'

@Component({
    selector: 'curr-time',
    template: `<div>{{currTime}}</div>` //don't use id property - so we can be valid when multiple instances exist on page

})

export class TimeComponent implements OnInit, OnDestroy{

    private clockInterval : any;
    public currTime : Date = new Date();

    constructor(){

    }

    ngOnInit(){
      this.startClock(); // its better to init in ngOnInit for testability.
    }

    startClock(){

        console.log('Clock Started');

        this.clockInterval = setInterval(()=>{
            this.currTime = new Date();
            //console.log('CurrTime: ', this.currTime);
        }, 1000);
    }

    ngOnDestroy(){
        clearInterval(this.clockInterval);
        console.log('Clock Stopped');
    }

}
