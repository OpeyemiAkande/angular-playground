import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  @Input() testimonialText!: string;
  @Input() testimonialTitle!: string;
  @Input() testifierName!: string;

  iconLabel: string = 'home'

}
