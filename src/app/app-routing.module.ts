import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { BorrowersComponent } from './pages/borrowers/borrowers.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Dashboard - Lenden'
  },
  {
    path: 'analytics',
    component: AnalyticsComponent,
    title: 'Analytics - Lenden'
  },
  {
    path: 'borrowers',
    component: BorrowersComponent,
    title: 'Borrowers - Lenden'
  },
  {
    path: 'settings',
    component: SettingsComponent,
    title: 'Settings - Lenden'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
