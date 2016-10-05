import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
    selector: 'curr-time',
    template: `<div>{{currTime|date:'HH:mm:ss'}}</div>` //don't use id property - so we can be valid when multiple instances exist on page

})

export class TimeComponent implements OnInit, OnDestroy{

    private clockInterval : any;
    public currTime : Date;


    ngOnInit(){
      this.startClock(); // its better to init in ngOnInit for testability.
    }

    startClock(){
        this.clockInterval = setInterval(()=>{
            this.currTime = new Date();
        }, 1000);
    }

    ngOnDestroy(){
        clearInterval(this.clockInterval);
        console.log('Clock Stopped');
    }

}
