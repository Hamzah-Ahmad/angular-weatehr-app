import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WeatherDisplayComponent } from "./weather-display/weather-display.component";
import { WeatherInputComponent } from './weather-input/weather-input.component';

@NgModule({
  declarations: [AppComponent, WeatherDisplayComponent, WeatherInputComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
