import { BikeInfoComponent } from './BikeInfo/Bikes.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
 
import { AppComponent } from './app.component';
import { BikesComponent } from './bikes/bikes.component';
 
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BikesDatabaseService } from './bikes-database.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MaterialModule, MdList, MdListItem } from '@angular/material'
import { BikeService } from './Services/bike.service';
 
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(BikesDatabaseService),
    MaterialModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    BikesComponent,
    BikeInfoComponent,
  ],
  bootstrap: [AppComponent],
  providers: [BikeService],
})
export class AppModule { }