import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports/reports.component';
import { SalesComponent } from './sales/sales.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [ReportsComponent, SalesComponent, DetailsComponent],
  imports: [CommonModule],
  exports: [ReportsComponent],
})
export class ReportsModule {}
