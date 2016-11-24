import {ActionReducer, Action} from '@ngrx/store';
import {IState} from './state.model';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const USER_LOGGED_OUT = "USER_LOGGED_OUT";

// This is the action fired when the activity timeout occured.
//  We keep it generic so the reducer can take any number 
//  of actions based on it (including perhaps none)
//
export const ACTIVITY_TIMEOUT_OCCURRED = "ACTIVITY_TIMEOUT_OCCURRED";

export const appReducer: ActionReducer<IState> = (state: IState, action: Action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                counter: state.counter + 1,
                loggedIn: state.loggedIn
            } as IState;

        case DECREMENT:
            return {
                counter: state.counter - 1,
                loggedIn: state.loggedIn
            } as IState;

        case RESET:
            return {
                counter: 0,
                loggedIn: state.loggedIn
            } as IState;

        case USER_LOGGED_IN:
            return {
                counter: state.counter,
                loggedIn: true
            } as IState;

        case USER_LOGGED_OUT:
        case ACTIVITY_TIMEOUT_OCCURRED:
            return {
                counter: state.counter,
                loggedIn: false
            } as IState;

        default:
            return state;
    }
}