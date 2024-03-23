import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { HomeComponent } from './components2/components/home/home.component';
import { PersonalizedProductComponent } from './components2/components/personalized-product/personalized-product.component';
import { TimeBaseComponent } from './components2/components/time-base/time-base.component';
import { CustomerBehaviourComponent } from './components2/components/customer-behaviour/customer-behaviour.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path:'dashboard',component:DashboardComponent,children:[
      {path:'',component:HomeComponent },
      {path:'homepage',component:HomeComponent},
      {path: 'personal', component: PersonalizedProductComponent},
      {path: 'timebase', component: TimeBaseComponent},
      {path: 'behaviour', component: CustomerBehaviourComponent},
      

    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
