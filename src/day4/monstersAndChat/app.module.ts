import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {MonsterModule} from "./monster/monster.module";
import {routes} from "./app.routes";
import {ChatModule} from "./chat/chat.module";
import {SharedModule} from "./shared/shared.module";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
	imports: [BrowserModule, RouterModule.forRoot(routes), MonsterModule, ChatModule, SharedModule],       // module dependencies
	declarations: [AppComponent, HomeComponent],   // components and directives
	bootstrap: [AppComponent],     // root component
})
export class AppModule {
}

