import { Component, OnInit } from '@angular/core';

import { Materia } from '../materia';

import { MateriasService } from '../services/materias.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.page.html',
  styleUrls: ['./materias.page.scss'],
})
export class MateriasPage implements OnInit {
  public mismaterias?: Materia[];

  constructor(
    private materiaService: MateriasService,
    public alertController: AlertController
  ) {}

  getMaterias(): void {
    this.materiaService
      .getMaterias()
      .subscribe((materias) => (this.mismaterias = materias));
  }

  ngOnInit() {
    this.getMaterias();
    console.log(this.mismaterias)
  }

  async deleteMateria(materia: Materia) {
    const alert = await this.alertController.create({
      header: 'Borrar',
      message: '¿Está seguro de borrar la matería?',
      buttons: [
        {
          text: 'No',
          role: 'Cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancela Borrando');
          },
        },
        {
          text: 'Si',
          handler: (blah) => {
            this.mismaterias = this.mismaterias?.filter((h) => h !== materia);
            this.materiaService.deleteMateria(materia).subscribe();
          },
        },
      ],
    });

    await alert.present();
  }
}
