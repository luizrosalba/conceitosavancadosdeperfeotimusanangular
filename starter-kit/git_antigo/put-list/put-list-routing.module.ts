import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PutListComponent } from './put-list.component';

const routes: Routes = [{ path: '', component: PutListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PutListRoutingModule {}
