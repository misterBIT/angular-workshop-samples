import {AppComponent} from './app.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AfterContentComponent, AfterContentParentComponent} from './after-content.component';
import {AfterViewParentComponent} from './after-view.component';
import {CounterParentComponent, MyCounter} from './counter.component';
import {MyHeroComponent, OnChangesParentComponent} from './on-changes.component';
import {PeekABooParentComponent} from './peek-a-boo-parent.component';
import {SpyParentComponent} from './spy.component';
import {CartBadgeCmp} from './cart/cart-badge.component';
import {DoCheckComponent, DoCheckParentComponent} from './do-check.component';

import {ItemsService} from './cart/cart.service';
import {ChildComponent} from './child.component';
import {PeekABooComponent} from './peek-a-boo.component';
import {Spy} from './spy.directive';


@NgModule({
	providers: [ItemsService],
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent, AfterContentParentComponent, AfterContentComponent,
		AfterViewParentComponent, ChildComponent,
		OnChangesParentComponent, PeekABooParentComponent, PeekABooComponent,
		Spy, SpyParentComponent, MyHeroComponent,
		CounterParentComponent, MyCounter,
		CartBadgeCmp,DoCheckComponent,DoCheckParentComponent],
	bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
