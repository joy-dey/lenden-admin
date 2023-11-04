import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomNavComponent } from './shared/bottom-nav/bottom-nav.component';
import { HomeComponent } from './pages/home/home.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { BorrowersComponent } from './pages/borrowers/borrowers.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { StatsCardComponent } from './pages/home/stats-card/stats-card.component';
import { AppBarComponent } from './shared/app-bar/app-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomNavComponent,
    HomeComponent,
    AnalyticsComponent,
    BorrowersComponent,
    SettingsComponent,
    StatsCardComponent,
    AppBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
