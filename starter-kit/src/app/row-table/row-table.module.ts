import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RowTableRoutingModule } from './row-table-routing.module';
import { RowTableComponent } from './row-table.component';

@NgModule({
  declarations: [RowTableComponent],
  imports: [CommonModule, RowTableRoutingModule],
})
export class RowTableModule {}
