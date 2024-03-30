import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent {
  @Input() paragraphText!: string;
  @Input() headingText!: string;
  @Input() imageUrl!: string;
}
