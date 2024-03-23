import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PRecommendationComponent } from './components/precommendation/precommendation.component';
import { RecommendationService } from './services/personalRecommendation/recommendation.service';
// import { ForecastComponent } from './components/BehaviourPredictions/forecast/forecast.component';
// import { PredictionComponent } from './components/BehaviourPredictions/prediction/prediction.component';
import { ProductRecommendationsComponent } from './components/productReccomand/product-recommendations/product-recommendations.component';
// import { ProductSearchComponent } from './components/productReccomand/product-search/product-search.component';
import { TimeBaseComponent } from './components2/components/time-base/time-base.component';
import { CustomerBehaviourComponent } from './components2/components/customer-behaviour/customer-behaviour.component';
import { PersonalizedProductComponent } from './components2/components/personalized-product/personalized-product.component';
import { HomeComponent } from './components2/components/home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { LeftSideNavBarComponent } from './core/components/dashboard/components/left-side-nav-bar/left-side-nav-bar.component';
import { TopBarComponent } from './core/components/dashboard/components/top-bar/top-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientComponent } from './core/components/dashboard/components/top-bar/components/client/client.component';
import { UserProfileComponent } from './core/components/dashboard/components/top-bar/components/user-profile/user-profile.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NgxMaterialTimepickerDirective } from './core/directives/ngx-material-timepicker.directive';
import { HttpClientModule } from '@angular/common/http';
import { TimeResultComponent } from './components2/components/time-base/time-result/time-result.component';
@NgModule({
  declarations: [
    AppComponent,

    PRecommendationComponent,
    // ForecastComponent,
    // PredictionComponent,
    ProductRecommendationsComponent,
    // ProductSearchComponent,
    DashboardComponent,
    LeftSideNavBarComponent,
    TopBarComponent,
    TimeBaseComponent,
    CustomerBehaviourComponent,
    PersonalizedProductComponent,
    HomeComponent,
    ClientComponent,
    UserProfileComponent,
    NgxMaterialTimepickerDirective,
    TimeResultComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    MatPaginatorModule,
    MatTabsModule,
    MatCardModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatSelectModule,
    MatProgressBarModule,
    FontAwesomeModule,
    ReactiveFormsModule,
        MatFormFieldModule,
        NgxMaterialTimepickerModule,
        HttpClientModule
  ],
  providers: [
    RecommendationService, // Provide the RecommendationService to be used across the application
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
