import { Component } from '@angular/core';
import { PartnerModel } from '../../shared.model';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {
  partners: PartnerModel[] = [
    {
      imageUrl: '../../../../assets/images/bamboo.svg',
      desc: 'bamboo'
    },
    {
      imageUrl: '../../../../assets/images/children.svg',
      desc: 'children multilingual school'
    },
    {
      imageUrl: '../../../../assets/images/ile.svg',
      desc: 'ile'
    },
    {
      imageUrl: '../../../../assets/images/artisan.svg',
      desc: 'artisan'
    },
    {
      imageUrl: '../../../../assets/images/branch.svg',
      desc: 'branch'
    }
  ]
}
