import { Component, Input } from '@angular/core';
import { FeatureCardModel } from '../../shared.model';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css']
})
export class FeatureCardComponent {
  @Input() feature!: FeatureCardModel;
}
