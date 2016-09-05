import {AppComponent} from './app.component';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AfterContentParentComponent} from './after-content.component';
import {AfterViewParentComponent} from './after-view.component';
import {CounterParentComponent} from './counter.component';
import {OnChangesParentComponent} from './on-changes.component';
import {PeekABooParentComponent} from './peek-a-boo-parent.component';
import {SpyParentComponent} from './spy.component';
import {CartBadgeCmp} from './cart/cart-badge.component'
import {ItemsService} from "./Cart/cart.service";


@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent, AfterContentParentComponent,
		AfterViewParentComponent,
		OnChangesParentComponent,
		PeekABooParentComponent,
		SpyParentComponent,
		CounterParentComponent,
		CartBadgeCmp],
	bootstrap: [AppComponent],
	providers: [ItemsService]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
