import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DocsComponent } from './docs/docs.component';
import { HistoryComponent } from './history/history.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {animation: 'home'} },
  { path: 'schedule', component: ScheduleComponent, data: {animation: 'schedule' } },
  { path: 'docs', component: DocsComponent, data: {animation: 'docs' } },
  { path: 'history', component: HistoryComponent, data: {animation: 'history' } },
  { path: 'settings', component: SettingsComponent, data: {animation: 'settings' } },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
