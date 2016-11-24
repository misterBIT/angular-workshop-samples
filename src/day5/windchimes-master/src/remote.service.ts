import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as io from 'socket.io-client';

export interface ControlState {
  clientCount:number,
  delay:number,
  state:string,
  muted:boolean
}

@Injectable()
export class Remote {

  private controlSocket:SocketIOClient.Socket;

  chimes() {
    const socket = io.connect('http://chimes-us.teropa.info/chimes');
    return Observable.create((observer) => {
      socket.on('chime', (chime) => observer.next(chime));
      return () => socket.close();
    });
  }

  controlEvents():Observable<ControlState> {
    return Observable.create((observer) => {
      this.getControlSocket().on('state', (state) => observer.next(state));
    });
  }

  adjustRate(delta:number) {
    this.getControlSocket().emit('adjustRate', delta);
  }

  resetRate() {
    this.getControlSocket().emit('resetRate');
  }

  done() {
    this.getControlSocket().emit('done');
  }

  start() {
    this.getControlSocket().emit('start');
  }

  mute() {
    this.getControlSocket().emit('mute');
  }

  unmute() {
    this.getControlSocket().emit('unmute');
  }

  private getControlSocket() {
    if (!this.controlSocket) {
      this.controlSocket = io.connect('http://chimes-us.teropa.info/ctrl');
    }
    return this.controlSocket;
  }


}
