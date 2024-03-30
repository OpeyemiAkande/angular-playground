import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material icons
import { MatIconModule } from '@angular/material/icon';

// components
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { ContainerComponent } from './components/container/container.component';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { LargeIconComponent } from './components/large-icon/large-icon.component';
import { MediumIconComponent } from './components/medium-icon/medium-icon.component';
import { SmallIconComponent } from './components/small-icon/small-icon.component';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrimaryHeadingComponent } from './components/primary-heading/primary-heading.component';
import { SecondaryHeadingComponent } from './components/secondary-heading/secondary-heading.component';
import { TertiaryHeadingComponent } from './components/tertiary-heading/tertiary-heading.component';
import { PrimaryParagraphComponent } from './components/primary-paragraph/primary-paragraph.component';
import { SecondaryParagraphComponent } from './components/secondary-paragraph/secondary-paragraph.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { SectionBlockComponent } from './components/section-block/section-block.component';
import { SectionTitleSecondaryComponent } from './components/section-title-secondary/section-title-secondary.component';
import { StepComponent } from './components/step/step.component';
import { SectionImageComponent } from './components/section-image/section-image.component';
import { TertiaryParagraphComponent } from './components/tertiary-paragraph/tertiary-paragraph.component';
import { AchievementsBannerComponent } from './components/achievements-banner/achievements-banner.component';
import { PartnersComponent } from './components/partners/partners.component';
import { InputComponent } from './components/input/input.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ObserveSectionDirective } from './observe-section.directive';
import { NavToggleDirectiveDirective } from './nav-toggle-directive.directive';
// import { SectionObserverDirective } from './section-observer.directive';

@NgModule({
    declarations: [
        BlogCardComponent,
        ButtonComponent,
        CardComponent,
        ContainerComponent,
        FeatureCardComponent,
        FooterComponent,
        LargeIconComponent,
        MediumIconComponent,
        SmallIconComponent,
        NavLinkComponent,
        NavbarComponent,
        PrimaryHeadingComponent,
        SecondaryHeadingComponent,
        TertiaryHeadingComponent,
        PrimaryParagraphComponent,
        SecondaryParagraphComponent,
        SectionTitleComponent,
        SubscribeComponent,
        SectionBlockComponent,
        SectionTitleSecondaryComponent,
        StepComponent,
        SectionImageComponent,
        TertiaryParagraphComponent,
        AchievementsBannerComponent,
        PartnersComponent,
        InputComponent,
        TestimonialComponent,
        ObserveSectionDirective,
        NavToggleDirectiveDirective
    ],
    imports: [CommonModule, MatIconModule],
    exports: [BlogCardComponent,
        ButtonComponent,
        CardComponent,
        ContainerComponent,
        FeatureCardComponent,
        FooterComponent,
        LargeIconComponent,
        MediumIconComponent,
        SmallIconComponent,
        NavLinkComponent,
        NavbarComponent,
        PrimaryHeadingComponent,
        SecondaryHeadingComponent,
        TertiaryHeadingComponent,
        PrimaryParagraphComponent,
        SecondaryParagraphComponent,
        SectionTitleComponent,
        SubscribeComponent,
        SectionBlockComponent,
        SectionTitleSecondaryComponent,
        StepComponent,
        SectionImageComponent,
        TertiaryParagraphComponent,
        AchievementsBannerComponent,
        PartnersComponent,
        InputComponent,
        TestimonialComponent,
        ObserveSectionDirective,
        NavToggleDirectiveDirective
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SharedModule { }