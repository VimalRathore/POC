import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { SortingComponent } from './sorting/sorting.component';
import { HandleComponent } from './handle/handle.component';
import { OrientationComponent } from './orientation/orientation.component';
const routes: Routes = [
  { path: '', redirectTo: 'basic', pathMatch: 'full' },
  { path: 'basic', component: BasicComponent },
  { path: 'sorting', component: SortingComponent },
  { path: 'handle', component: HandleComponent },
  { path: 'orientation', component: OrientationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
