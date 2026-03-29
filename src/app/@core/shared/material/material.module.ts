import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const material = [
  MatButtonModule,
  MatStepperModule,
  MatInputModule,
  MatIconModule,
  MatCheckboxModule,
  MatSelectModule,
  MatRippleModule,
  MatTabsModule,
  MatAutocompleteModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatChipsModule,
  MatTooltipModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatSnackBarModule,
  MatMenuModule,
  MatRadioModule,
  MatExpansionModule,
  MatSidenavModule,
  MatCardModule,
  MatBadgeModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatProgressBarModule,
  DragDropModule,
  MatSliderModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
  MatDividerModule,
];

@NgModule({
  imports: [material],
  exports: [material],
  // schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  // providers: [
  //   /**By default the MomentDateAdapter creates dates in your time zone specific locale.
  //    *  You can change the default behaviour to parse dates as UTC
  //    *  by providing the MAT_MOMENT_DATE_ADAPTER_OPTIONS and setting it to useUtc: true.**/
  //   { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
  //   /*************************************************************************************/

  //   /************************To use custom date format************************/
  //   { provide: MAT_DATE_FORMATS, useValue: FLOWMONO_DATE_FORMATS },
  //   /*************************************************************************/
  // ],
})
export class MaterialModule {}
