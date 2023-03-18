import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DonateComponent } from './donate/donate.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { SermonsComponent } from './sermons/sermons.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'news', component: NewsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'sermons', component: SermonsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'donate', component: DonateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
