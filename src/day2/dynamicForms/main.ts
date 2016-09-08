import {Component} from '@angular/core'
import {DynamicFormsExampleAppComponent} from "./dynamic-forms-example.component";
import {DynamicFormFieldComponent, FormControlService} from "./dynamic-form";
//example taken from http://playcode.org/dynamic-forms-in-angular-2/

@Component({
	selector  : 'app',
	template  : `
    <dynamic-forms-example-app></dynamic-forms-example-app>
    `,
})
class AppComponent {

}


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DynamicFormComponent} from "./dynamic-form/dynamic-form.component";
import {UserService} from "./user.service";


@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule],      
  declarations: [ AppComponent, DynamicFormsExampleAppComponent, DynamicFormComponent,DynamicFormFieldComponent],
  bootstrap: [ AppComponent ],     
  providers: [ FormControlService ,UserService]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

