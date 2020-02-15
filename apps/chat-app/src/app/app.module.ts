import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, LoginComponent, ChatComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN'
    }),
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
