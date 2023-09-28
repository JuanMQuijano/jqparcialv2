import { Component, OnInit } from '@angular/core';

import {
  NavController,
  LoadingController,
  ToastController,
} from '@ionic/angular';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';

import { Materia } from '../materia';
import { MateriasService } from '../services/materias.service';

@Component({
  selector: 'app-nuevamateria',
  templateUrl: './nuevamateria.page.html',
  styleUrls: ['./nuevamateria.page.scss'],
})
export class NuevamateriaPage implements OnInit {
  nuevaMateria = {} as Materia;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private loadCtrl: LoadingController,
    private materiaService: MateriasService
  ) {}

  ngOnInit() {}

  back(): void {
    this.router.navigate(['tabs/materias']);
  }

  ionViewDidEnter() {
    this.nuevaMateria = {} as Materia;
  }

  save(nuevaMateria: any) {
    this.showMessage('Guardando');
    this.nuevaMateria.id = Number(this.nuevaMateria.id);
    this.materiaService.newMateria(nuevaMateria).subscribe((materias) => {
      this.router.navigate(['tabs/materias']);
      this.showMessage('Materia Registrada!');
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
