import {DomSanitizationService} from "@angular/platform-browser"
import {Pipe, PipeTransform} from "@angular/core"
import {tick} from "@angular/core/testing";
@Pipe({name: 'safe'})
export class SafePipe implements PipeTransform{
	constructor(private  sanitizer:DomSanitizationService) {
	}
	transform(value){
		return this.sanitizer.bypassSecurityTrustHtml(value);
	}
}