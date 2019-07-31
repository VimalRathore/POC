import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgRedux, NgReduxModule} from 'ng2-redux';
import { AppRoutingModule } from './app-routing.module';
import { rootReducer, IAppState, INITIAL_STATE } from './store';
import {fromJS, Map} from 'immutable';
import { PipesCOnceptComponent } from './pipes-concept/pipes-concept.component';

@NgModule({
  declarations: [AppComponent, PipesCOnceptComponent],
   imports: [
      BrowserModule,
      AppRoutingModule, NgReduxModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {
  // constructor(ngRedux: NgRedux<IAppState>) {
      constructor(ngRedux: NgRedux<Map<string, any>>) {
      ngRedux.configureStore(rootReducer, fromJS(INITIAL_STATE));
   }
 }
