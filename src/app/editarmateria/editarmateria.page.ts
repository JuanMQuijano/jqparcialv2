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
  selector: 'app-editarmateria',
  templateUrl: './editarmateria.page.html',
  styleUrls: ['./editarmateria.page.scss'],
})
export class EditarmateriaPage implements OnInit {
  id: any;
  materia?: Materia;
  seleccionado?: Materia;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private loadCtrl: LoadingController,
    private materiaService: MateriasService
  ) {}

  ngOnInit() {
    //Recuperamos el dato id pasado por el parametro en la URL
    this.route.params.forEach((params: Params) => {
      this.materiaService
        .getMateriaById(params['id'])
        .subscribe((seleccionado) => {
          this.seleccionado = seleccionado;
        });
    });
  }

  back(): void {
    //Regresar a la lista de Materias
    this.router.navigate(['tabs/materias']);
  }

  edit(materia: Materia): void {
    this.materiaService.editMateria(materia).subscribe(() => {
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
