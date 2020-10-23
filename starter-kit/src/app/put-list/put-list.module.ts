import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { PutListRoutingModule } from './put-list-routing.module';
import { PutListComponent } from './put-list.component';


@NgModule({
  declarations: [PutListComponent],
  imports: [
    CommonModule,
    PutListRoutingModule,
    FormsModule
  ]
})
export class PutListModule { }
