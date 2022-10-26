import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './cmps/home/home.component';
import { HeaderComponent } from './cmps/header/header.component';
import { FooterComponent } from './cmps/footer/footer.component';
import { SignupComponent } from './cmps/signup/signup.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './cmps/contact-details/contact-details.component';
import { LoginComponent } from './cmps/login/login.component';
import { FormsModule } from '@angular/forms';
import { AddContactComponent } from './cmps/add-contact/add-contact.component';
import { EditContactComponent } from './cmps/edit-contact/edit-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactListComponent,
    SignupComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    LoginComponent,
    AddContactComponent,
    EditContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
