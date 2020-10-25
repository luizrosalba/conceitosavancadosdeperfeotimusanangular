import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteListRoutingModule } from './delete-list-routing.module';
import { DeleteListComponent } from './delete-list.component';

@NgModule({
  declarations: [DeleteListComponent],
  imports: [CommonModule, DeleteListRoutingModule],
  providers: [],
})
export class DeleteListModule {}
