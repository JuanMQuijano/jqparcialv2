import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { Materia } from '../materia';
import { MateriasService } from '../services/materias.service';
import { EstudiantesMateria } from '../estudiantesMateria';
import { EstudiantesMateriaService } from '../services/estudiantes-materia.service';
import { Estudiante } from '../estudiante';
import { EstudiantesService } from '../services/estudiantes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-estudiantesmaterias',
  templateUrl: './estudiantesmaterias.page.html',
  styleUrls: ['./estudiantesmaterias.page.scss'],
})
export class EstudiantesmateriasPage implements OnInit {
  id: any;
  seleccionado?: Materia;
  // public estudiantesMateria?: EstudiantesMateria[];
  public estudiantesMateria?: Estudiante[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private materiasService: MateriasService,
    // private estudiantesMateriasService: EstudiantesMateriaService
    private estudiantesService: EstudiantesService,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.materiasService
        .getMateriaById(params['id'])
        .subscribe((seleccionado) => (this.seleccionado = seleccionado));
      this.estudiantesService
        .getEstudiantesByMateria(params['id'])
        .subscribe((estudiantes) => {
          this.estudiantesMateria = estudiantes;
        });

      console.log(this.estudiantesMateria);
    });
  }

  back(): void {
    this.router.navigate(['tabs/estudiantesmaterias/{{materiasService.id}}']);
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
            this.estudiantesMateria = this.estudiantesMateria?.filter(
              (h) => h !== estudiante
            );
            this.estudiantesService.deleteEstudiante(estudiante).subscribe();
          },
        },
      ],
    });

    await alert.present();
  }
}
