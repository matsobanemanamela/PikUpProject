import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {appRoutes} from './router';
import {ToastrModule} from 'ngx-toastr';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HomepageComponent} from './homepage/homepage.component';
import {UserServiceService} from './Shared/user-service.service';
import {AuthGuard} from './Auth/auth.guard.service';
import { ProfileComponent } from './profile/profile.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { TransportationComponent } from './transportation/transportation.component';
import { ProductAndServiceComponent } from './product-and-service/product-and-service.component';
import { SkillsAndTalentComponent } from './skills-and-talent/skills-and-talent.component';
import { BooksAndStationeryComponent } from './books-and-stationery/books-and-stationery.component';
import { SalesComponent } from './sales/sales.component';
import { AddAccommodationComponent } from './add-accommodation/add-accommodation.component';
import { AddTransportComponent } from './add-transport/add-transport.component';
import { AddProductAndSalesComponent } from './Service advertisement/add-product-and-sales.component';
import { AddSkillsAndTalentComponent } from './add-skills-and-talent/add-skills-and-talent.component';
import { AddBooksAndStationeryComponent } from './add-books-and-stationery/add-books-and-stationery.component';
import { AddSalesComponent } from './add-sales/add-sales.component';
import {MatButtonModule} from'@angular/material/button'
import {MatCardModule } from '@angular/material/card'
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule } from '@angular/material/list';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NotificationComponent } from './notification/notification.component';
import { ChartsComponent } from './charts/charts.component';
import { NavbarComponent } from './navbar/navbar.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    ProfileComponent,
    AccommodationComponent,
    TransportationComponent,
    ProductAndServiceComponent,
    SkillsAndTalentComponent,
    BooksAndStationeryComponent,
    SalesComponent,
    AddAccommodationComponent,
    AddTransportComponent,
    AddProductAndSalesComponent,
    AddSkillsAndTalentComponent,
    AddBooksAndStationeryComponent,
    AddSalesComponent,
    UserProfileComponent,
    FeedbackComponent,
    NotificationComponent,
    ChartsComponent,
    NavbarComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [UserServiceService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
