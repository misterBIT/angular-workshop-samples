import {StoreModule} from '@ngrx/store';
import {appReducer} from './app.reducer';
import {initialState} from './state.model';
import {AppComponent} from './app.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AutoLogoutService} from './auto-logout.service';
@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, StoreModule.provideStore(appReducer, initialState)],
    bootstrap: [AppComponent],
    providers: [AutoLogoutService]
})
class AppModule {
    constructor(al: AutoLogoutService) {
        al.start();
    }

}
platformBrowserDynamic().bootstrapModule(AppModule);

