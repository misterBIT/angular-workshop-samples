import { routing } from "./app.routes";
import { AppComponent } from "./app.component";




import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



import { CarService } from './car/car.service';
import { DialogService } from './shared/dialog.service';
import { MonsterService } from './monster/monster.service';
import {AuthService  } from './shared/auth/auth.service';
import {AuthGuard  } from './shared/auth/auth-guard.service';
import {CanDeactivateGuard  } from './shared/can-deactivate-guard.service';
import {HomeComponent} from "./home/home.component";
import {CarDetailComponent} from "./car/car-detail.component";
import {CarListComponent} from "./car/car-list.component";
import {LoginComponent} from "./login/login.component";


@NgModule({
  imports: [ BrowserModule, FormsModule, RouterModule, routing],      
  declarations: [ AppComponent,HomeComponent,CarDetailComponent,CarListComponent,LoginComponent],
  bootstrap: [ AppComponent ],     
  providers: [ MonsterService, CarService, DialogService, AuthService, AuthGuard, CanDeactivateGuard ]                   
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
