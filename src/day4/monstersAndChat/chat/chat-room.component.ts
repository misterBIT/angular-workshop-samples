import {Component, OnDestroy} from '@angular/core';
import {ChatRoomService} from './chat-room.service';
@Component({
    selector: 'chat-room',
    styles: [`section {background: #eee; font-family: Monaco, Consolas;width:30%;float:left; display:block; box-sizing:border-box;padding:10px} `],
    template: `
      <section>
        <h2>{{(chatRoom.connected$ | async) ? "Connected!" : "Disconnected..."}}</h2>
        <button class="btn" (click)="chatRoom.toggleConnectionStatus()" [ngClass]="{'btn-danger': chatRoom.connected$ | async,'btn-info':!(chatRoom.connected$ | async)}">{{(chatRoom.connected$ | async) ? 'Disconnect' : 'Connect'}}</button>
        <div *ngIf="chatRoom.connected$|async" class="form-group">
          <label class="">Enter Message: <input #i class="form-control" (keyup.enter)="chatRoom.send(i.value); i.value = ''"></label>
        </div>
        <div class="messageListContainer">
            <div *ngFor="let message of chatRoom.messages$ | async">
              {{message}}
            </div>
        </div>
      </section>
    `
})
export class ChatRoomComponent implements OnDestroy{

    constructor(private chatRoom: ChatRoomService) {
        chatRoom.connect();
    }

    ngOnDestroy(){
        this.chatRoom.disconnect();
    }

}
