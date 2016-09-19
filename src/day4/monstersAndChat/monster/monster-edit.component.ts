import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {MonsterService} from './monster.service';
import {MonsterModel} from './monster.model';
import {FileUploader} from 'ng2-file-upload';

@Component({
	selector: 'monster-edit',
	templateUrl: 'monster-edit.component.html',
})
export class MonsterEditComponent implements OnInit {

	private frmMonster: FormGroup;
	private monsterToEdit: MonsterModel;
	public uploader: FileUploader;

	constructor(private formBuilder: FormBuilder,
	            private route: ActivatedRoute,
	            private router: Router,
	            private monsterService: MonsterService) {
		this.uploader = new FileUploader({url: monsterService.url});
		this.monsterToEdit = this.route.snapshot.data['monster'] || new MonsterModel({power: 3});
		this.frmMonster = this.formBuilder.group({
			name: [this.monsterToEdit.name,
				[Validators.required,
					Validators.minLength(3),
					Validators.maxLength(100)]],
			power: [this.monsterToEdit.power, Validators.required],
			imgUrl: [this.monsterToEdit.imgUrl]
		});
	}

	ngOnInit() {
		this.frmMonster.reset();
	}

	save() {
		// if there is a file to upload, use the uploader to update both file and form data
		if (this.uploader.getNotUploadedItems().length) {
			this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
				for (let key of Object.keys(this.frmMonster.value)) {
					form.append(key, this.frmMonster.value[key]);
				}
			};
			this.uploader.onCompleteAll = ()=>this.router.navigate(['/monster']);
			this.uploader.uploadAll();
		} else {
			// if file upload support is not needed, go regular:
			const monsterId = (this.monsterToEdit) ? this.monsterToEdit.id : undefined;
			this.monsterService.save(this.frmMonster.value, monsterId)
				.then(() => {
					this.router.navigate(['/monster']);
				});
		}
	}

}
