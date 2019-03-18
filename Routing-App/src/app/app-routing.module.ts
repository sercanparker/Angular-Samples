import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditCardListComponent } from './credit-card-list/credit-card-list.component';
import { VideoCallsListComponent } from './video-calls-list/video-calls-list.component';

const routes: Routes = [
  { path: 'credit-cards-list', component: CreditCardListComponent },
  { path: 'video-calls-list',      component: VideoCallsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
