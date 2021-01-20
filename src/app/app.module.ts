import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SomethingComponent } from './something/something.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { GuestComponent } from './guest/guest.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserContactComponent } from './user-contact/user-contact.component';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component'

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SomethingComponent,
    EmployeeComponent,
    AdminComponent,
    UserComponent,
    GuestComponent,
    PageNotFoundComponent,
    UserDetailComponent,
    UserInfoComponent,
    UserContactComponent,
    LoginComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
