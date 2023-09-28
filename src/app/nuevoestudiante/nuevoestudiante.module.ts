import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoestudiantePageRoutingModule } from './nuevoestudiante-routing.module';

import { NuevoestudiantePage } from './nuevoestudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoestudiantePageRoutingModule
  ],
  declarations: [NuevoestudiantePage]
})
export class NuevoestudiantePageModule {}
