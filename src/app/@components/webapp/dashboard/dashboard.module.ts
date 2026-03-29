import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AnalyticsCardComponent } from './analytics-card/analytics-card.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];
const components = [DashboardComponent, AnalyticsCardComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardModule {}
