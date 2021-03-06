import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from './auth-guard.service';
import { GuestComponent } from './guest/guest.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProtectedComponent } from './protected/protected.component';
import { UserContactComponent } from './user-contact/user-contact.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'protected',component:ProtectedComponent,canActivate: [AuthGuardService] },
  {path:'admin',component:AdminComponent},
  {path:'',component:GuestComponent},
  {path:'user',component:UserComponent},
  {path:'user/:id',component:UserDetailComponent,children:[
    {path:'info',component:UserInfoComponent},
    {path:'contact',component:UserContactComponent}
  ]},
  // {path:'user/:id',children:[
  //   {path:'info',component:UserInfoComponent},
  //   {path:'contact',component:UserContactComponent}
  // ]},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
