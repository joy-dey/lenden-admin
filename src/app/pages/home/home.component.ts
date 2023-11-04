import { Component } from '@angular/core';
import { ThemeService } from 'src/services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  greetingData: {icon: string, message: string};
  statsData: Array<{icon: string, title: string, data: string}>;


  constructor(private themeService: ThemeService) {
    this.greetingData = {icon: '', message: ''};

    this.statsData = [
      {icon: 'ri-arrow-left-down-line', title: 'Money In', data: '15038'},
      {icon: 'ri-arrow-right-up-line', title: 'Money Out', data: '6018'},
      {icon: 'ri-bank-card-fill', title: 'Total Amt. Due', data: '29039'},
      {icon: 'ri-funds-fill', title: 'Active Loans', data: '6'}
    ]

  }

  ngOnInit() {
    this.greetingData = this.getGreeting();
  }

  getGreeting(): {icon: string, message: string} {
    const hour = new Date().getHours();
    let greeting: {icon: string, message: string} = {icon: '', message: ''}

    if(hour >= 4 && hour < 12) {
      greeting = {
        icon: 'ri-sun-fill',
        message: 'Good Morning'
      }
    } else if(hour >=12 && hour < 17) {
      greeting = {
        icon: 'ri-sun-foggy-fill',
        message: 'Good Afternoon'
      }
    } else if(hour >=17 && hour < 21) {
      greeting = {
        icon: 'ri-haze-fill',
        message: 'Good Evening'
      }
    } else {
      greeting = {
        icon: 'ri-moon-foggy-fill',
        message: 'Good Night'
      }
    }

    return greeting;
  }

  applyTheme() {
    this.themeService.toggleTheme();
  }

}
