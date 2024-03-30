import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title-secondary',
  templateUrl: './section-title-secondary.component.html',
  styleUrls: ['./section-title-secondary.component.css']
})
export class SectionTitleSecondaryComponent {
  @Input() title!: string;
}
