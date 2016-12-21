import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Component, NgModule, Inject} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

//app.actions.ts
export enum actions {
    increment,
    decrement
}
//app.component.ts
@Component({
    selector: 'app',
    template: `<span>{{count}}</span>
<button (click)="increment()">Increment</button>
<button (click)="decrement()">Decrement</button>
`
})
export class AppComponent {
    count: number;

    constructor(@Inject('store') private store) {
    }

    ngOnInit() {
        this.store.subscribe(state => this.count = state.count);
    }

    increment() {
        this.store.dispatch(actions.increment);
    }

    decrement() {
        this.store.dispatch(actions.decrement);
    }

}

//app.module.ts
@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    providers: [{provide: 'store', useValue: createStore(appReducer)}], ///////// either use createRxStore(appReducer) or createStore(appReducer) - they provide with the same API
    bootstrap: [AppComponent]
})
export class AppModule {
}

/// bootstrap (main.ts)
platformBrowserDynamic().bootstrapModule(AppModule);


interface ApplicationState {
    count: number;
}
//counter.reducer.ts
function counterReducer(count: number = 0, action: any) {
    switch (action) {
        case actions.increment:
            return count + 1;
        case actions.decrement:
            return count - 1;
        default:
            return count;
    }
}
//app.reducer.ts
function appReducer(state: ApplicationState = {count: 0}, action) {
    console.log("Processing action " + action.type);
    let newState: ApplicationState = {
        count: counterReducer(state.count, action)
    };
    console.log('new state ', JSON.stringify(newState));
    return newState;

}
//store.service.ts - option 1 - vanilla javascript implementation - pubSub like...
function createStore(reducer) {
    let state = reducer(undefined, {type: "__INIT"});
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener(state));
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        listener(state);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    };

    return {getState, dispatch, subscribe};
}


/////////////////////////////////////////////////////////
//store.service.ts - option 2 - Rxjs Observable based - allows use of all operators and the async pipe...
interface AppStore extends BehaviorSubject<ApplicationState> {
    getState(): ApplicationState;
    dispatch(v: any): void;
}
export function createRxStore(reducer, initialState?): AppStore {
    let _dispatcher = new Subject<any>();
    let appStateObservable: Observable<ApplicationState> =
        _dispatcher.startWith((initialState) ? initialState : reducer(undefined, {type: "__INIT"}))
            .scan(reducer, initialState)
            .share();

    let store = wrapIntoBehaviorSubject(initialState, appStateObservable);
    return Object.assign(store, {
        getState: () => {
            let state;
            store.subscribe((current) => { // this runs synchronously
                state = current;
            });
            return state;
        },
        dispatch: (v) => {
            _dispatcher.next(v)
        }
    });
}

function wrapIntoBehaviorSubject(init, obs: Observable<any>) {
    const res = new BehaviorSubject(init);
    obs.subscribe(s => res.next(s));
    return res;
}

