import {Component} from '@angular/core'
import {AddressEditCmp} from './address-edit.component'

@Component({
	selector  : 'app',
	template  : `
    <h2>Forms Custom Validations</h2>
    <address-edit></address-edit>
    `,
})
class AppComponent {
}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {EmailValidator} from './email-validator';
import {EmailBlacklistService} from "./email-blacklist.service";


@NgModule({
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule],      
  declarations: [ AppComponent, AddressEditCmp, EmailValidator],   
  bootstrap: [ AppComponent ],     
  providers: [ EmailBlacklistService ]                   
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);