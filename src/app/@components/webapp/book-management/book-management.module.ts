import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BookManagementComponent } from './book-management.component';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { BookTableComponent } from './book-table/book-table.component';
// import { MatPaginatorModule } from '@angular/material/paginator';
import { MaterialModule } from 'src/app/@core/shared/material/material.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SharedModule } from '../../../@core/shared/shared.module';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { AddBookComponent } from './add-book/add-book.component';
import { CalendarModule } from 'primeng/calendar';

const routes: Routes = [
  {
    path: '',
    component: BookManagementComponent,
  },
  {
    path: 'details',
    data: { breadcrumb: 'Details' },
    component: BookDetailsComponent,
  },
];

const components = [BookManagementComponent];

@NgModule({
  declarations: [
    components,
    BookTableComponent,
    BookDetailsComponent,
    ConfirmDeleteComponent,
    AddBookComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ConfirmDialogModule,
    ToastModule,
    ButtonModule,
    MaterialModule,
    CalendarModule,
    SharedModule,
  ],
  providers: [ConfirmationService, MessageService],
  exports: [RouterModule, ConfirmDeleteComponent],
})
export class BookManagementModule {}
