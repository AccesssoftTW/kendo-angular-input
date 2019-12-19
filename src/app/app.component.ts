import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public maskedValue = 'абвг abcd';
  public sliderValue = 5;
  public numericValue = 5;
  public switchValue = false;
  public min = 0;
  public max = 10;
  public smallStep = 1;
  public mask = "YYYY LLLL";
  public rules: { [key: string]: RegExp } = {
    "L": /[a-zA-Z]/,
    "Y": /[\u0400-\u0481\u048A-\u04FF]/
  };
}
