import {bootstrap} from "@angular/platform-browser-dynamic";
import {LocationStrategy, PathLocationStrategy} from "@angular/common";
import {ROUTER_PROVIDERS} from "./app.routes";
import {AppComponent} from "./app.component";

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	{provide: LocationStrategy, useClass: PathLocationStrategy}
]);

