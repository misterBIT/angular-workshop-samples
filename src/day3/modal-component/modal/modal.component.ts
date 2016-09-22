import {Component, OnInit, EventEmitter, Output, OnDestroy, ChangeDetectorRef} from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {Observable, Subscription} from "rxjs";
export interface IBtnDef {
	text: string;
	cssClass: string;
	data: any;
}
export interface IModalDefinition {
	title: string;
	body: string;
	buttons: IBtnDef[];
}

@Component({
	selector: 'modal-component',
	template: `<div class="overlay" [hidden]="!hasData()" (click)="dismiss()">
				<div class="modal fade" [class.fade]="!hasData()" [style.display]="hasData() ?  'block':'none'" tabindex="-1" role="dialog">
				  <div class="modal-dialog" role="document" (click)="stopPropagation($event)">
				    <div class="modal-content">
				      <div class="modal-header">
				        <button type="button" class="close" data-dismiss="modal" (click)="dismiss()" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				        <h4 class="modal-title">{{data?.title}}</h4>
					  </div>
					  <div class="modal-body" [innerHTML]="data?.body">
					  </div>
					  <div class="modal-footer">
				        <button *ngFor="let btn of data?.buttons" type="button" (click)="closeModal(btn.data)" class="btn" [class]="btn.cssClass+ ' btn'" data-dismiss="modal">{{btn.text}}</button>
				      </div>
				    </div><!-- /.modal-content -->
				  </div><!-- /.modal-dialog -->
				</div><!-- /.modal -->
			</div><!-- overlay -->`
	, styles: [`.overlay{
			z-index:1040;
			background: rgba(204,204,204,0.8);
			position: fixed;
			top:0;
			left:0;
			width:100%;
			height:100%;
			
	}`]
})
export class ModalCompoonent implements OnInit,OnDestroy {
	@Input() modalObs: Observable<IModalDefinition>;
	@Output() modalClosed = new EventEmitter(false);
	private data = null;
	private subscription: Subscription;

	constructor(private cd: ChangeDetectorRef) {
	}

	stopPropagation($evnt) {
		$evnt.stopPropagation();
		return false;

	}

	hasData() {
		return (this.data !== null);
	}

	ngOnInit() {
		this.subscription = this.modalObs.subscribe((modalDef: IModalDefinition)=> {
			this.data = modalDef;
			this.cd.detectChanges();
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	dismiss() {
		this.closeModal(false);
	}

	closeModal($event) {
		this.modalClosed.emit($event);
		this.data = null;
	}
}
