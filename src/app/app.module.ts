import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from '../app/components/home/home.component'
import { NewsComponent } from './components/news/news.component';
import { ContactComponent } from './components/contact/contact.component';
import { DonateComponent } from './components/donate/donate.component';
import { SermonsComponent } from './components/sermons/sermons.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AnimateDirective } from './directive/animation-on-view.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    ContactComponent,
    DonateComponent,
    SermonsComponent,
    AnimateDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
