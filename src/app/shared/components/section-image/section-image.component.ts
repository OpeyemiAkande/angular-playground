import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-image',
  templateUrl: './section-image.component.html',
  styleUrls: ['./section-image.component.css']
})
export class SectionImageComponent {
  @Input() imageUrl!: string;
}
