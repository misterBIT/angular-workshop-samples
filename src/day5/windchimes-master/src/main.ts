import {provide} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {APP_ROUTER_PROVIDERS} from './app.routes';
import {AppComponent} from './app.component';

function main() {
  bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
  ]);
}

function bootstrapDomReady() {
  document.addEventListener('DOMContentLoaded', main);
}

if (module['hot']) {
  console.log('hot');
  if (document.readyState === 'complete') {
    console.log('main');
    main();
  } else {
    console.log('boot');
    bootstrapDomReady();
  }
  module['hot']['accept']();
} else {
  bootstrapDomReady();
}
