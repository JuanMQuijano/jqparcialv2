import { Component, OnInit } from '@angular/core';

import {
  NavController,
  LoadingController,
  ToastController,
} from '@ionic/angular';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';

import { Estudiante } from '../estudiante';
import { EstudiantesService } from '../services/estudiantes.service';
import { Materia } from '../materia';
import { MateriasService } from '../services/materias.service';

@Component({
  selector: 'app-nuevoestudiante',
  templateUrl: './nuevoestudiante.page.html',
  styleUrls: ['./nuevoestudiante.page.scss'],
})
export class NuevoestudiantePage implements OnInit {
  id: any;
  nuevoEstudiante = {} as Estudiante;
  id_materia?: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private loadCtrl: LoadingController,
    private estudianteService: EstudiantesService,
    private materiaService: MateriasService
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.id_materia = params['id'];
    });
    console.log(this.id_materia);
  }

  back(): void {
    this.router.navigate(['tabs/materias']);
  }
  ionViewDidEnter() {
    this.nuevoEstudiante = {} as Estudiante;
  }

  save(nuevoEstudiante: any) {
    this.showMessage('Guardando');
    this.nuevoEstudiante.id = Number(this.nuevoEstudiante.id);
    this.nuevoEstudiante.id_materia = Number(this.id_materia);
    this.estudianteService
      .newEstudiante(nuevoEstudiante)
      .subscribe((estudiante) => {
        this.router.navigate(['tabs/estudiantesmaterias/' + this.id_materia]);
        this.showMessage('Estudiante Registrado!');
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
