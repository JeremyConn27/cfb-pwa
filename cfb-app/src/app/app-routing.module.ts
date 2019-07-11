import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DocsComponent } from './docs/docs.component';
import { HistoryComponent } from './history/history.component';
import { fader } from './route-animations';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {animation: 'fader'} },
  { path: 'schedule', component: ScheduleComponent, data: {animation: 'fader' } },
  { path: 'docs', component: DocsComponent, data: {animation: 'fader' }},
  { path: 'history', component: HistoryComponent, data: {animation: 'fader' }},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
