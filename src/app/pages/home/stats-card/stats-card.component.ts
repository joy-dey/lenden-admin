import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss']
})
export class StatsCardComponent {
  @Input() icon: string;
  @Input() title: string;
  @Input() data: string;

  constructor() {
    this.icon = '';
    this.title = '';
    this.data = '';
  }

}
