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
  selector: 'app-nuevoestudiante',
  templateUrl: './nuevoestudiante.page.html',
  styleUrls: ['./nuevoestudiante.page.scss'],
})
export class NuevoestudiantePage implements OnInit {
  nuevoEstudiante = {} as Estudiante;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private loadCtrl: LoadingController,
    private estudianteService: EstudiantesService
  ) {}

  ngOnInit() {}

  back(): void {
    this.router.navigate(['tabs/estudiantes']);
  }
  ionViewDidEnter() {
    this.nuevoEstudiante = {} as Estudiante;
  }

  save(nuevoEstudiante: any) {
    this.showMessage('Guardando');
    this.nuevoEstudiante.id = Number(this.nuevoEstudiante.id);
    this.estudianteService
      .newEstudiante(nuevoEstudiante)
      .subscribe((estudiante) => {
        this.router.navigate(['tabs/estudiantes']);
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
