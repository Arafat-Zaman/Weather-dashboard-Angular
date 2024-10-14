import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = environment.weatherApiBaseUrl;
  private apiKey = environment.weatherApiKey;

  constructor(private http: HttpClient) { }

  // Method to fetch weather data by city name
  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}weather?q=${city}&appid=${this.apiKey}&units=metric`);
  }
}
