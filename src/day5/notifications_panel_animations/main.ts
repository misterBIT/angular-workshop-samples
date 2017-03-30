import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NotificationService} from './shared/index';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {NotificationPanelComponent} from './notification-panel/notification-panel.component';
import {NotificationComponent} from './notification/notification.component';
import {BrowserModule} from '@angular/platform-browser';
import '!style-loader!css-loader!./styles.css';
import '!style-loader!css-loader!font-awesome/css/font-awesome.css';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
    declarations: [AppComponent, NotificationComponent, NotificationPanelComponent],
    imports: [BrowserModule,BrowserAnimationsModule],
    bootstrap: [AppComponent],
    providers: [NotificationService]
})
class AppModule {

}
platformBrowserDynamic().bootstrapModule(AppModule);
