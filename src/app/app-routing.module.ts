import { EditContactComponent } from './cmps/edit-contact/edit-contact.component';
import { AddContactComponent } from './cmps/add-contact/add-contact.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './cmps/login/login.component';
import { ContactResolver } from './resolves/contact.resolver';
import { ContactDetailsComponent } from './cmps/contact-details/contact-details.component';
// import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { HomeComponent } from './cmps/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full' },
  
  {path:'contacts',component:ContactListComponent},
  {path:'contacts/:id',component:ContactDetailsComponent , resolve:{contact:ContactResolver}},
  {path:'login',component:LoginComponent,canActivate:[AuthGuard]},
  {path:'contact/add',component:AddContactComponent},
  {path:'edit/:id',component:EditContactComponent, resolve:{contact:ContactResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
