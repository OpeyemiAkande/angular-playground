import { Component } from '@angular/core';

import { AchieventModel } from './shared/shared.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-2';
  text = "Let\' talk 👋🏾"
  achievementsObj: AchieventModel[] = [
    {
      magnitude: '40+',
      metric: 'staff in different regions'
    },
    {
      magnitude: '40M+',
      metric: 'total amount loan disbursed'
    },
    {
      magnitude: '360+',
      metric: 'Approved & disbursed loan applications'
    }
  ]
}
