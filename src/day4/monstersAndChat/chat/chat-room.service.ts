import {Injectable, Inject} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {BehaviorSubject} from 'rxjs';


@Injectable()
export class ChatRoomService {
	// url$ = Observable.of('https://socket-chat-example-qsaokhakmv.now.sh/');
	url = 'http://localhost:3003';
	private socket$: BehaviorSubject<any>;
	public connected$: any;
	public messages$: any;

	constructor(@Inject('io') private io: SocketIOClientStatic) {

		this.socket$ = new BehaviorSubject(undefined);

		this.messages$ = this.socket$
			.switchMap(socket => Observable.fromEvent(socket, 'chat message'))
			.startWith([])
			.scan((acc, curr)=> [...<string[]>acc, curr]);

		const disconnect$ = this.socket$
			.switchMap(socket => Observable.fromEvent(socket, 'disconnect'));

		const connect$ = this.socket$
			.switchMap(socket => Observable.fromEvent(socket, 'connect'));

		this.connected$ = Observable.merge(
			connect$.mapTo(true),
			disconnect$.mapTo(false)
		);

	}

	connect() {
		const socketRef = this.io(this.url);
		this.socket$.next(socketRef);
	}

	send(message) {
		this.socket$.subscribe((socket)=> {
			socket.emit('chat message', message);
		});
	}

	toggleConnectionStatus() {
		this.socket$.subscribe(socket=> {
			socket.disconnected ? socket.connect() : socket.disconnect();
		});

	}

	disconnect() {
		this.socket$.subscribe(socket=> {
			socket.disconnect();
		});
	}
}

