import {NgModule} from "@angular/core";
import {ChatRoomComponent} from "./chat-room.component";
import {ChatRoomService} from "./chat-room.service";
import * as io from "socket.io-client";
import {SharedModule} from "../shared/shared.module";
@NgModule({
	declarations: [ChatRoomComponent],
	providers: [ChatRoomService, [{provide: 'io', useValue: io}]],
	imports: [SharedModule],
	exports: [ChatRoomComponent]
})
export class ChatModule {
}
