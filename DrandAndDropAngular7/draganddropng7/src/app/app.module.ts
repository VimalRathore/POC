import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { SortingComponent } from './sorting/sorting.component';
import { HandleComponent } from './handle/handle.component';
import { OrientationComponent } from './orientation/orientation.component';
import { MatToolbarModule, MatMenuModule, MatInputModule, MatTableModule, MatButtonModule,
   MatCardModule, MatTableDataSource, MatPaginatorModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    SortingComponent,
    HandleComponent,
    OrientationComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatMenuModule, MatInputModule, MatTableModule, MatButtonModule, MatCardModule, MatPaginatorModule, MatSortModule,  
    DragDropModule
  ],
  exports: [
    MatToolbarModule, MatMenuModule, MatInputModule, MatTableModule, MatButtonModule, MatCardModule, MatPaginatorModule, MatSortModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
