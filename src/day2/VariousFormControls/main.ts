import { bootstrap }    from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import 'rxjs/Rx';

import { AppComponent } from './app.component';

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
]);
