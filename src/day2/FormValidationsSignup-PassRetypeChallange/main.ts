import {bootstrap}    from '@angular/platform-browser-dynamic';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

import {AppComponent} from './app.component';

bootstrap(AppComponent, [
	disableDeprecatedForms(),
	provideForms(),
]);
/*. The component
 *. Username  - requirement: required, must be 5–8 characters
 *. Email - required, must be valid email format
 *. Password and Retype Password
 -. validateEqual custom validator
 -. @Attribute(‘validateEqual’) assign it to validateEqual variable.
 here, the value of validateEqual would be “password”.
 -. in a naive implementation we would have a bug
 Type “123” in password field, then “123” in retype password, then change the password input to “1234”.
 (we only apply our equal validator to retype password)
 -. one solution is to us
 */