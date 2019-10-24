import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-weather-input",
  templateUrl: "./weather-input.component.html",
  styleUrls: ["./weather-input.component.css"]
})
export class WeatherInputComponent implements OnInit {
  constructor() {}
  @Output() addEvent = new EventEmitter();
  city;
  inputHandler() {
    this.addEvent.emit(this.city);
    this.city = "";
  }
  ngOnInit() {}
}
