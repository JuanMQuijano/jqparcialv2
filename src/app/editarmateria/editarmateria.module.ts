import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarmateriaPageRoutingModule } from './editarmateria-routing.module';

import { EditarmateriaPage } from './editarmateria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarmateriaPageRoutingModule
  ],
  declarations: [EditarmateriaPage]
})
export class EditarmateriaPageModule {}
