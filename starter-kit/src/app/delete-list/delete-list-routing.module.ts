import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteListComponent } from './delete-list.component';

const routes: Routes = [{ path: '', component: DeleteListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteListRoutingModule { }
