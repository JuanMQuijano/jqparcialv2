import { Component, OnInit } from '@angular/core';

import { Estudiante } from '../estudiante';

import { EstudiantesService } from '../services/estudiantes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.page.html',
  styleUrls: ['./estudiantes.page.scss'],
})
export class EstudiantesPage implements OnInit {
  public misestudiantes?: Estudiante[];

  constructor(
    private estudianteService: EstudiantesService,
    public alertController: AlertController
  ) {}

  getEstudiantes(): void {
    this.estudianteService
      .getEstudiantes()
      .subscribe((estudiantes) => (this.misestudiantes = estudiantes));
  }

  ngOnInit() {
    this.getEstudiantes();
  }

  async deleteEstudiante(estudiante: Estudiante) {
    const alert = await this.alertController.create({
      header: 'Borrar',
      message: '¿Está seguro de borrar al estudiante?',
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
            this.misestudiantes = this.misestudiantes?.filter(
              (h) => h !== estudiante
            );
            this.estudianteService.deleteEstudiante(estudiante).subscribe();
          },
        },
      ],
    });

    await alert.present();
  }
}
