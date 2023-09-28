import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstudiantesmateriasPageRoutingModule } from './estudiantesmaterias-routing.module';

import { EstudiantesmateriasPage } from './estudiantesmaterias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstudiantesmateriasPageRoutingModule
  ],
  declarations: [EstudiantesmateriasPage]
})
export class EstudiantesmateriasPageModule {}
