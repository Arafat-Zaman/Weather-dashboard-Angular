import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeatherDashboardComponent } from './components/weather-dashboard/weather-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  // Required for API calls
    FormsModule        // Required for two-way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
