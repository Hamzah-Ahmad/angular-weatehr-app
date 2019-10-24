import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  api: string = "c097576f27f48e42a9dbf5b272df8457";

  constructor(private http: HttpClient) {}
  getWeather(city) {
    return this.http.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.api}`
    );
  }
}
