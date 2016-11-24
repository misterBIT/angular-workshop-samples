import {Component, NgModule} from '@angular/core';
import {DynamicFormsExampleAppComponent} from './dynamic-forms-example.component';
import {DynamicFormFieldComponent, FormControlService} from './dynamic-form';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {UserService} from './user.service';
//example taken from http://playcode.org/dynamic-forms-in-angular-2/

@Component({
	selector  : 'app',
	template  : `
    <dynamic-forms-example-app></dynamic-forms-example-app>
    `,
})
class AppComponent {

}


@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule],      
  declarations: [ AppComponent, DynamicFormsExampleAppComponent, DynamicFormComponent,DynamicFormFieldComponent],
  bootstrap: [ AppComponent ],     
  providers: [ FormControlService ,UserService]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

