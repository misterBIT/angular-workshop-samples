import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

import {ToastModule} from 'ng2-toastr';
import {FILE_UPLOAD_DIRECTIVES} from "ng2-file-upload";
import {CommonModule} from "@angular/common";
let sharedModules = [CommonModule, FormsModule, ReactiveFormsModule, HttpModule, ToastModule];
let commonPipes = [];
let commonDirectives = [FILE_UPLOAD_DIRECTIVES];

@NgModule({
	declarations: [...commonPipes, ...commonDirectives],
	imports: sharedModules,
	exports: [...commonDirectives, ...commonPipes, ...sharedModules]
})
export class SharedModule {
}
