import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './@core/shared/shared.module';
import { PageNotFoundComponent } from './@components/page-not-found/page-not-found.component';
import { UnauthorizedPageComponent } from './@components/unauthorized-page/unauthorized-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NoScrollInputDirective } from './@directives/no-scroll-input/no-scroll-input.directive';
import { PipesModule } from './@core/pipes/pipes.module';
import { ConfirmationService, MessageService } from 'primeng/api';

// import { MaterialModule } from './@core/shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    UnauthorizedPageComponent,
    NoScrollInputDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    MatPaginatorModule,
    PipesModule,
  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
