import { Component } from '@angular/core';
import { AchieventModel, BlogCardModel, FeatureCardModel, SectionBlockModel, stepModel } from 'src/app/shared/shared.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  steps: stepModel[] = [
    {
      headingText: 'Apply',
      paragraphText: 'Take your first step to financial freedom by applying for a loan from us and we will be available to help you every step of the way.',
    },
    {
      headingText: 'Get verified',
      paragraphText: 'We follow a well-regulated process to evaluate you/your documents we verify you and move you to the next step',
    },
    {
      headingText: 'Get funded',
      paragraphText: 'After evaluation you will get your loan, all of this will occur within 24 hours. Our loans are quick and easy. It’s that simple',
    }
  ]

  achievements: AchieventModel[] = [
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

  blogItems: BlogCardModel[] = [
    {
      imageUrl: '../../../../assets/images/how-to-program.jpeg',
      headingText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo sodales elit......',
      paragraphText: 'A digital prescription for the pharma industry'
    },
    {
      imageUrl: '../../../../assets/images/how-to-program.jpeg',
      headingText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo sodales elit......',
      paragraphText: 'A digital prescription for the pharma industry'
    },
    {
      imageUrl: '../../../../assets/images/how-to-program.jpeg',
      headingText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo sodales elit......',
      paragraphText: 'A digital prescription for the pharma industry'
    }
  ]

  sectionBlocks: SectionBlockModel[] = [
    {
      sectionTitleText: 'Why Revent',
      sectionTitleType: 'primary',
      paragraphText: 'We support micro businesses and enterprises within the fast-moving consumer goods (FMCG) sector with a view to reduce hunger and foster a thriving micro economy within our communities amongst men and women.',
      paragraphType: 'primary',
      headingText: 'We are a micro-finance body that',
      headingType: 'secondary',
      higlightedText: 'cares'
    },
    {
      sectionTitleText: 'What we offer',
      sectionTitleType: 'primary',
      paragraphText: 'We also provide working capital support the micro businesses within the FMCG value chain to meet daily operational needs & partner with you to grow your business by providing the right type of funding.',
      paragraphType: 'primary',
      headingText: 'Have access to loans anytime anywhere',
      headingType: 'secondary'
    },
    {
      sectionTitleText: 'What we offer',
      sectionTitleType: 'secondary',
      paragraphText: 'We provide business advisory that is backed with funding to increase turnover and in turn profits while alleviating poverty especially among-st women and communities that are under banked or unbanked. ',
      paragraphType: 'primary',
      headingText: 'Financial Advisory, consultation and Lending services',
      headingType: 'secondary'
    }
  ]

  guaranteeBlock: SectionBlockModel = {
    sectionTitleText: 'We guarantee',
    sectionTitleType: 'primary',
    paragraphText: 'Whether you’re at home, at the office, or on the go, you can apply for your loan from anywhere. We will be available to help you every step of the way',
    paragraphType: 'primary',
    headingText: 'Easy Financial services',
    headingType: 'secondary',
    higlightedText: 'wherever you go'
  }

  features: FeatureCardModel[] = [
    {
      imageUrl: '../../../../assets/images/megaphone.svg',
      paragraphText: 'We provide you with a faster approach to applying for a loan. As mentioned earlier, you will get your loan within 24 hours.',
      headingText: 'Quick & Instant'
    },
    {
      imageUrl: '../../../../assets/images/megaphone.svg',
      paragraphText: 'Our interest rates are hard to beat. With us you get more for less.',
      headingText: 'Technology driven'
    },
    {
      imageUrl: '../../../../assets/images/megaphone.svg',
      paragraphText: 'We have enhanced the loan application process by utilizing technology to bring you convenience and speed ',
      headingText: 'Technology driven'
    },
    {
      imageUrl: '../../../../assets/images/megaphone.svg',
      paragraphText: 'With us you get access to the funds you need through our hassle-free and efficient processes',
      headingText: 'Convinient & flexible'
    }
  ]

}
