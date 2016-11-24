import {Component, NgModule} from '@angular/core';
import {AddressEditCmp} from './address-edit.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmailValidator} from './email-validator';
import {EmailBlacklistService} from './email-blacklist.service';

@Component({
	selector  : 'app',
	template  : `
    <h2>Forms Custom Validations</h2>
    <address-edit></address-edit>
    `,
})
class AppComponent {
}


@NgModule({
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule],      
  declarations: [ AppComponent, AddressEditCmp, EmailValidator],   
  bootstrap: [ AppComponent ],     
  providers: [ EmailBlacklistService ]                   
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);