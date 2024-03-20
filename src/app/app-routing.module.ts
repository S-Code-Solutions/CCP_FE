import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'forecast', component: ForecastComponent },
  { path: 'prediction', component: PredictionComponent },
  { path: '', redirectTo: '/forecast', pathMatch: 'full' } // Redirect to forecast by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
