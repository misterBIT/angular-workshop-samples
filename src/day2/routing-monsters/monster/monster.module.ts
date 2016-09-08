import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {MonsterCenterComponent} from './monster-center.component';
import {MonsterAdminComponent} from './monster-admin.component';
import {MonsterDetailComponent} from './monster-detail.component';
import {MonsterService} from './monster.service';
import {RouterModule} from '@angular/router';
import {monsterCenterRoutes} from './monster-center.routes';
import {MonsterListComponent} from './monster-list.component';
@NgModule({
    imports: [SharedModule, RouterModule.forChild(monsterCenterRoutes)],
    declarations: [MonsterListComponent, MonsterCenterComponent, MonsterAdminComponent, MonsterDetailComponent],
    providers: [MonsterService],
    exports: []
})
export class MonstersModule {
}