import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevamateriaPageRoutingModule } from './nuevamateria-routing.module';

import { NuevamateriaPage } from './nuevamateria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevamateriaPageRoutingModule
  ],
  declarations: [NuevamateriaPage]
})
export class NuevamateriaPageModule {}
