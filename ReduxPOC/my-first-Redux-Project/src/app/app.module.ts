import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { addCoinReducer } from './reducers/blockchain.reducer';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockchainComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
     StoreModule.provideStore({blockchain: addCoinReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
