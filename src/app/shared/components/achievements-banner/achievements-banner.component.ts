import { Component, Input } from '@angular/core';
import { AchieventModel } from '../../shared.model';

@Component({
  selector: 'app-achievements-banner',
  templateUrl: './achievements-banner.component.html',
  styleUrls: ['./achievements-banner.component.css']
})
export class AchievementsBannerComponent {
  @Input() achievements!: AchieventModel[];

}

