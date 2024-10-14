import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.scss']
})
export class WeatherDashboardComponent implements OnInit {

  city: string = 'Dhaka';  // Default city
  weatherData: any;        // Stores weather data

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.fetchWeather();  // Fetch weather data on initialization
  }

  // Fetch weather data for the specified city
  fetchWeather() {
    this.weatherService.getWeather(this.city).subscribe(
      (data) => {
        this.weatherData = data;
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      }
    );
  }

  // Trigger new weather fetch on user input
  onCityChange() {
    this.fetchWeather();
  }
}
