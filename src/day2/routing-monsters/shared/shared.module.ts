import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {CanDeactivateGuard} from './can-deactivate-guard.service';
import {AuthGuard} from './auth/auth-guard.service';
import {AuthService} from './auth/auth.service';
import {DialogService} from './dialog.service';
import {CommonModule} from '@angular/common';

let CommonlyUsedModules = [CommonModule, ReactiveFormsModule, BrowserModule, FormsModule, RouterModule];

@NgModule({
	imports: CommonlyUsedModules,
	declarations: [],
	exports: CommonlyUsedModules,
	providers: [DialogService, AuthService, AuthGuard, CanDeactivateGuard]
})
export class SharedModule {
}