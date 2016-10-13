
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {NgModule} from "@angular/core";
import {ModalModule} from "./modal/modal.module";
import {AppComponent} from './app.component';



@NgModule({
	imports: [BrowserModule, ModalModule],
	declarations: [AppComponent],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
