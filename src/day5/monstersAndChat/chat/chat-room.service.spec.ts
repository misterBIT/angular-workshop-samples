import {TestBed, inject, async} from '@angular/core/testing';
import {ChatRoomService} from './chat-room.service';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';

describe('Chat room service', ()=> {
	let ioMock: IoMock;

	interface IoMock {
		emit: jasmine.Spy;
		on: (evName: string, cb: Function)=>{};
		off: (evName: string, cb: Function)=>{};
		disconnected: boolean;
		connect: jasmine.Spy;
		disconnect: jasmine.Spy;
		eventsHash$: {};
		emitEvent$(type, data?): IoMock

	}
	beforeEach(()=> {

		ioMock = Object.assign({
			disconnected: true,
			on(evName, cb){
				this.eventsHash$[evName] = cb;
			},
			off(evName, cb){ //needed for rxjs fromEvent to recongnise our mock as a relevant eventEmmiter
			},
			emitEvent$(evName, data?){
				if (evName === 'connect') {
					this.disconnected = false;
				} else if (evName === 'disconnect') {
					this.disconnected = true;
				}
				if (typeof this.eventsHash$[evName] === 'function') {
					this.eventsHash$[evName](data || this);
				} else {
					throw new Error('event ' + evName + ' was not registered on mock!');
				}
			},
			eventsHash$: {}
		}, jasmine.createSpyObj('io', ['connect', 'disconnect', 'emit']));

		TestBed.configureTestingModule({
			providers: [
				ChatRoomService,
				{
					provide: 'io',
					useValue: jasmine.createSpy('ioFactory', ()=> {
						return ioMock;
					}).and.callThrough()
				}
			]
		});

	});
	it('should expose public members messages$ and connected$ which should be instance of observable', inject([ChatRoomService], (charRoomSvc: ChatRoomService) => {
		expect(charRoomSvc.connected$).toBeDefined();
		expect(charRoomSvc.connected$ instanceof Observable).toBeTruthy();
		expect(charRoomSvc.messages$).toBeDefined();
		expect(charRoomSvc.messages$ instanceof Observable).toBeTruthy();
	}));

	describe('connect function', ()=> {
		it('checks connect will call the socket io factory for the relevant url', inject([ChatRoomService, 'io'], (charRoomSvc: ChatRoomService, ioSpy: jasmine.Spy) => {
			charRoomSvc.connect();
			expect(ioSpy).toHaveBeenCalledWith(charRoomSvc.url);
		}));
		it('checks connect will emit the resulting object to the socket$ observable, resulting in new value in connected$', async(inject([ChatRoomService], (charRoomSvc: ChatRoomService) => {
			charRoomSvc.connected$.subscribe((v)=> {
				expect(v).toBeTruthy();
			});
			charRoomSvc.connect();
			ioMock.emitEvent$('connect'); // normally this would be issued by the io client (by emmiting the connect event)
		})));
	});
	describe('send function', ()=> {
		it('it emits a `chat message` event type to the socket with relevant message text as value', async(inject([ChatRoomService], (chatRoomSvc: ChatRoomService) => {
			chatRoomSvc.connected$.subscribe(); // will not be able to send if not subscribed...
			chatRoomSvc.connect();
			ioMock.emitEvent$('connect');
			chatRoomSvc.send('test');
			expect(ioMock.emit).toHaveBeenCalledWith('chat message', 'test');
		})));
	});

	describe('toggleConnectionStatus function', ()=> {
		it('it will disconnect a connected socket', async(inject([ChatRoomService], (charRoomSvc: ChatRoomService) => {
			charRoomSvc.connected$.subscribe();
			charRoomSvc.connect();
			ioMock.emitEvent$('connect');
			charRoomSvc.toggleConnectionStatus();
			expect(ioMock.disconnect).toHaveBeenCalled();
		})));
		it('it will connect a disconnected socket', async(inject([ChatRoomService], (charRoomSvc: ChatRoomService) => {
			charRoomSvc.connected$.subscribe();
			charRoomSvc.connect();
			charRoomSvc.toggleConnectionStatus();
			expect(ioMock.connect).toHaveBeenCalled();
		})));
	});
	describe('messages$ observable', ()=> {
		it('messages$ starts with empty array', async(inject([ChatRoomService], (charRoomSvc: ChatRoomService) => {
			charRoomSvc.connected$.subscribe();
			charRoomSvc.messages$.subscribe((v)=> {
				expect(v).toEqual([]);
			});
			charRoomSvc.connect();
			ioMock.emitEvent$('connect');
		})));
		it('new messages from socket emit values', async(inject([ChatRoomService], (charRoomSvc: ChatRoomService) => {
			charRoomSvc.connected$.subscribe();
			charRoomSvc.messages$.skip(1).subscribe((v)=> {
				expect(v).toEqual(['test']);
			});
			charRoomSvc.connect();
			ioMock.emitEvent$('connect');
			ioMock.emitEvent$('chat message', 'test')
		})));
		it('next messages are added to the array', async(inject([ChatRoomService], (charRoomSvc: ChatRoomService) => {
			charRoomSvc.connected$.subscribe();
			charRoomSvc.connect();
			ioMock.emitEvent$('connect');
			let callCount = 0;
			charRoomSvc.messages$.subscribe((v)=> {
				callCount++;
				if (callCount == 3) { // 0->1 on subscribe ([]), 1->2 on 'test1' 2->3 on 'test2'
					expect(v).toEqual(['test1', 'test2']);
				}
			});
			ioMock.emitEvent$('chat message', 'test1');
			ioMock.emitEvent$('chat message', 'test2');
		})));
	});
});