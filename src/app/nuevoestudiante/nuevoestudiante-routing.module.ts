import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoestudiantePage } from './nuevoestudiante.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoestudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoestudiantePageRoutingModule {}
