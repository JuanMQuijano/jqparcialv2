import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarestudiantePage } from './editarestudiante.page';

const routes: Routes = [
  {
    path: '',
    component: EditarestudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarestudiantePageRoutingModule {}
