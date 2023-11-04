import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent {

  @Input() title: string;

  constructor(private location: Location) {
    this.title = 'null';
  }

  goBack() {
    this.location.back();
  }

}
