import {Component} from '@angular/core';
import {NotificationService} from './shared/index';

@Component({
    selector:'app',
    // encapsulation:ViewEncapsulation.Native,
    templateUrl: "app.component.html",
    styleUrls: ['app.component.css']
})
export class AppComponent {

    constructor(private notificationService: NotificationService) {

        for (let i = 0; i < 10; i++) {
            let n = this.notificationService.createRandomNotification();
            this.notificationService.addNotification(n);
        }

        this.notificationService.startRandomGeneration();
    }
}
