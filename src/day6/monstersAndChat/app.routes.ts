import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ChatRoomComponent} from './chat/chat-room.component';


export const routes: Routes = [
  {path: '',  redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  { path: 'chat', component: ChatRoomComponent, outlet: 'aux'},
];
