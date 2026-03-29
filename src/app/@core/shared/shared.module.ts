import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

// components
import { LargeIconComponent } from './components/large-icon/large-icon.component';
import { MediumIconComponent } from './components/medium-icon/medium-icon.component';
import { SmallIconComponent } from './components/small-icon/small-icon.component';
import { PrimaryHeadingComponent } from './components/primary-heading/primary-heading.component';
import { SecondaryHeadingComponent } from './components/secondary-heading/secondary-heading.component';
import { TertiaryHeadingComponent } from './components/tertiary-heading/tertiary-heading.component';
import { PrimaryParagraphComponent } from './components/primary-paragraph/primary-paragraph.component';
import { SecondaryParagraphComponent } from './components/secondary-paragraph/secondary-paragraph.component';
import { ButtonComponent } from './components/button/button.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ImageThumbnailComponent } from './components/image-thumbnail/image-thumbnail.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { InputComponent } from './components/inputs/input/input.component';
import { InputCheckboxComponent } from './components/inputs/input-checkbox/input-checkbox.component';
import { ErrorComponent } from './components/error/error.component';
import { SearchComponent } from './components/search/search.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ButtonLoaderModule } from './loaders/button-loader/button-loader.module';
import { SelfieComponent } from './components/selfie/selfie.component';
// import { AccordionModule } from './components/ui/accordion/accordion.module';
// import { ButtonLoaderComponent } from './loaders/button-loader/button-loader.component';

const components = [
  PrimaryHeadingComponent,
  SecondaryHeadingComponent,
  TertiaryHeadingComponent,
  PrimaryParagraphComponent,
  SecondaryParagraphComponent,
  LargeIconComponent,
  MediumIconComponent,
  SmallIconComponent,
  ButtonComponent,
  AvatarComponent,
  ImageThumbnailComponent,
  ListGroupComponent,
  TabsComponent,
  AvatarComponent,
  ImageThumbnailComponent,
  ListGroupComponent,
  TabsComponent,
  InputComponent,
  InputCheckboxComponent,
  ErrorComponent,
  SearchComponent,
];

@NgModule({
  declarations: [components, SelfieComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule,
    MatIconModule,
    ButtonLoaderModule,
  ],
  exports: [components],
  providers: [ConfirmationService, MessageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
