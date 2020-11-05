import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FirstCompComponent } from './components/first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';

const routes: Routes = [
  {
    path : '',
    component : FirstCompComponent
  },
  {
    path : 'content',
    component : SecondCompComponent,
    // canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
