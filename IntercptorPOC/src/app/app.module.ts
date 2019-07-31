import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
//import { HelloComponent } from './hello.component';
import { MyInterceptor } from './MyInterceptor';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
   providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true
    }
  ]
})
export class AppModule { }
