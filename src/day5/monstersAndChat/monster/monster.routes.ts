import {Routes} from '@angular/router';
import {MonsterListComponent} from './monster-list.component';
import {MonsterComponent} from './monster.component';
import {MonsterEditComponent} from './monster-edit.component';
import {MonsterResolver} from './monster.resolver';

export const routes: Routes = [
	{path: 'monster', component: MonsterListComponent},
	{path: 'monster/edit', component: MonsterEditComponent},
	{path: 'monster/edit/:id', component: MonsterEditComponent, resolve: {monster: MonsterResolver}},
	{path: 'monster/:id/:name', component: MonsterComponent},
];



