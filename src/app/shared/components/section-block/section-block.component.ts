import { Component, Input } from '@angular/core';
import { SectionBlockModel } from '../../shared.model';

@Component({
  selector: 'app-section-block',
  templateUrl: './section-block.component.html',
  styleUrls: ['./section-block.component.css']
})
export class SectionBlockComponent {
  @Input() block!: SectionBlockModel;


}
