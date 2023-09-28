import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarmateriaPage } from './editarmateria.page';

const routes: Routes = [
  {
    path: '',
    component: EditarmateriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarmateriaPageRoutingModule {}
