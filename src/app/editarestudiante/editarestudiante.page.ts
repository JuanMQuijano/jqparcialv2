import { Component, OnInit } from '@angular/core';

import {
  NavController,
  LoadingController,
  ToastController,
} from '@ionic/angular';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';

import { Estudiante } from '../estudiante';
import { EstudiantesService } from '../services/estudiantes.service';

@Component({
  selector: 'app-editarestudiante',
  templateUrl: './editarestudiante.page.html',
  styleUrls: ['./editarestudiante.page.scss'],
})
export class EditarestudiantePage implements OnInit {
  id: any;
  estudiante?: Estudiante;
  seleccionado?: Estudiante;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private loadCtrl: LoadingController,
    private estudianteService: EstudiantesService
  ) {}

  ngOnInit() {
    //Recuperamos el dato id pasado por el parametro en la URL
    this.route.params.forEach((params: Params) => {
      this.estudianteService
        .getEstudianteById(params['id'])
        .subscribe((seleccionado) => {
          this.seleccionado = seleccionado;
        });
    });
  }

  back(): void {
    //Regresar a la lista de Materias
    this.router.navigate(['tabs/materias']);
  }

  edit(estudiante: Estudiante): void {
    this.estudianteService.editEstudiante(estudiante).subscribe(() => {
      this.showMessage('Registro Exitoso!');
      this.back();
    });
  }

  showMessage(message: string) {
    this.toastCtrl
      .create({
        message: message,
        duration: 2000,
      })
      .then((toast) => toast.present());
  }
}
