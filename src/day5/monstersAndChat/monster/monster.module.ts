import {NgModule} from '@angular/core';
import {MonsterListComponent} from './monster-list.component';
import {MonsterFilterComponent} from './monster-filter.component';
import {MonsterEditComponent} from './monster-edit.component';
import {MonsterComponent} from './monster.component';
import {MonsterThumbComponent} from './monster-thumb.component';
import {MonsterService} from './monster.service';
import {MonsterResolver} from './monster.resolver';
import {MonstersFilterByPipe} from './monsters-filterBy.pipe';
import {routes} from './monster.routes';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';


@NgModule({
	imports: [SharedModule, RouterModule.forChild(routes)],       // module dependencies
	declarations: [MonsterComponent, MonsterListComponent, MonsterThumbComponent, MonsterEditComponent, MonsterFilterComponent, MonstersFilterByPipe],
	providers: [MonsterService, MonsterResolver]                    // services
})
export class MonsterModule {
}

