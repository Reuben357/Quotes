import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { QuoteComponent } from './quote/quote.component';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/quote',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'goal-form',
  //   component:GoalFormComponent
  // },
  // {
  //   path: 'quote',
  //   component:QuoteComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
