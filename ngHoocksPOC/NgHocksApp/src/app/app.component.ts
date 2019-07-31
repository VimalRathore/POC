import { INCREMENT } from './actions';
import { Component } from '@angular/core';
import {NgRedux, select } from 'ng2-redux';
import { IAppState } from './store';
import {Map} from 'immutable';

@Component({
   selector: 'app-root',

    templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
 })
 export class AppComponent {
   title = 'NgHocksApp';
   // @select('counter') count;
   @select(s=> s.get('counter')) count;
  // @select(['messaging', 'newMessages']) newMessages;
   // @select((s: IAppState)  => s.messaging.newMessages) newMessagesCount;
  // constructor(private ngRedux: NgRedux<IAppState>) {
    constructor(private ngRedux: NgRedux<Map<string, any>>) {
    // ngRedux.subscribe(() => {
    //   // tslint:disable-next-line:prefer-const
    //  // console.log(ngRedux.getState());
    //   let store = ngRedux.getState();
    //   this.counter = store.counter;
    // });

  }
  increment() {
    // this.counter++;
    // this.ngRedux.dispatch({type: INCREMENT, body: '', subject: ''});
    this.ngRedux.dispatch({type: INCREMENT});
  }
}

// @Component({
//   selector: 'app-root',
//   template: `
// <joke-list></joke-list>
// `
// })
// export class AppComponent {}
