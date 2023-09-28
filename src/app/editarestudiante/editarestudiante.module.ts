import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarestudiantePageRoutingModule } from './editarestudiante-routing.module';

import { EditarestudiantePage } from './editarestudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarestudiantePageRoutingModule
  ],
  declarations: [EditarestudiantePage]
})
export class EditarestudiantePageModule {}
