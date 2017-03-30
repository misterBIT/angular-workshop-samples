import {ActionReducer, Action} from '@ngrx/store';
import {IState} from './state.model';
export const ACTIONS = {
  "INCREMENT": "INCREMENT",
  "DECREMENT": "DECREMENT",
  "RESET": "RESET",
  "USER_LOGGED_IN": "USER_LOGGED_IN",
  "USER_LOGGED_OUT": "USER_LOGGED_OUT",
  "ACTIVITY_TIMEOUT_OCCURRED": "ACTIVITY_TIMEOUT_OCCURRED"
}

export const appReducer: ActionReducer<IState> = (state: IState, action: Action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {...state, counter: state.counter + 1};
    case ACTIONS.DECREMENT:
      return {...state, counter: state.counter - 1};
    case ACTIONS.RESET:
      return {...state, counter: 0};
    case ACTIONS.USER_LOGGED_IN:
      return {...state, loggedIn: true};
    case ACTIONS.USER_LOGGED_OUT:
    case ACTIONS.ACTIVITY_TIMEOUT_OCCURRED:
      return {...state, loggedIn: false};
    default:
      return state;
  }
}