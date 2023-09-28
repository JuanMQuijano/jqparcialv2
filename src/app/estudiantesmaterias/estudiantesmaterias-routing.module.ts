import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudiantesmateriasPage } from './estudiantesmaterias.page';

const routes: Routes = [
  {
    path: '',
    component: EstudiantesmateriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudiantesmateriasPageRoutingModule {}
