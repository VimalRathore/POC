import {INCREMENT} from './actions';
import {tassign} from 'tassign';
import {Map} from 'immutable';

// tslint:disable-next-line:no-empty-interface

export interface IAppState {
    counter: number;
    // messaging?: {
    //     newMessages: number;
    // };
}

// tslint:disable-next-line:one-variable-per-declaration
export const INITIAL_STATE: IAppState = {
    counter: 0,
    // messaging: {
    //     newMessages: 5
    // }
};

// tslint:disable-next-line:no-shadowed-variable
export function rootReducer(state: Map<string, any>, action: { type: any; }): Map<string, any> {
    switch (action.type) {
      case INCREMENT:
      // return { counter: state.counter + 1 };
      // return Object.assign({}, state, {counter: state.counter + 1});
      // tassign(state, {counter: state.counter + 1, isOnline: true});
     // return tassign(state, {counter: state.counter + 1});
     return state.set('counter', state.get('counter') + 1);
    }
    return state;

}
