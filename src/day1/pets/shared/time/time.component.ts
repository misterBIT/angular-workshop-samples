import {Component, OnInit, OnDestroy} from '@angular/core'

@Component({
    selector: 'curr-time',
    template: `<div>{{currTime}}</div>` //don't use id property - so we can be valid when multiple instances exist on page

})

export class TimeComponent implements OnInit, OnDestroy{

    private clockInterval : any;
    public currTime : string;


    ngOnInit(){
      this.startClock(); // its better to init in ngOnInit for testability.
    }

    startClock(){

        this.clockInterval = setInterval(()=>{
            this.currTime = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
        }, 1000);
    }

    ngOnDestroy(){
        clearInterval(this.clockInterval);
        console.log('Clock Stopped');
    }
    toHHMMSS(str) {
        var sec_num = parseInt(str, 10); // don't forget the second param
        var hours:   any = Math.floor(sec_num / 3600);
        var minutes: any = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds: any = sec_num - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        return hours+':'+minutes+':'+seconds;
    }

}
