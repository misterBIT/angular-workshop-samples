import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {CanDeactivateGuard} from './can-deactivate-guard.service';
import {AuthGuard} from './auth/auth-guard.service';
import {AuthService} from './auth/auth.service';
import {DialogService} from './dialog.service';
import {CommonModule} from '@angular/common';
@NgModule({
    imports: [CommonModule, ReactiveFormsModule, BrowserModule, FormsModule, RouterModule],
    declarations: [],
    exports: [CommonModule, FormsModule, BrowserModule, RouterModule],
    providers: [DialogService, AuthService, AuthGuard, CanDeactivateGuard]
})
export class SharedModule {
}