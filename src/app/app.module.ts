import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ContactService,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }