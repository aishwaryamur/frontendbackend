import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {AddtoFavModule} from './addto-fav/addto-fav.module';
import { HttpClientModule } from '@angular/common/http';
import { NavFavComponent } from './nav-fav/nav-fav.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AddtoFavComponent } from './addto-fav/addto-fav.component';
import { Addfav } from './addfav';

@NgModule({
  declarations: [
    AppComponent,
    NavFavComponent,AddtoFavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
     BrowserModule,CommonModule,MatButtonModule,MatIconModule
  ],
  providers: [Addfav],
  bootstrap: [AppComponent]
})
export class AppModule { }
