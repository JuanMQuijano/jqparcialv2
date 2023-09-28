import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { Materia } from '../materia';
import { MateriasService } from '../services/materias.service';
import { EstudiantesMateria } from '../estudiantesMateria';
import { EstudiantesMateriaService } from '../services/estudiantes-materia.service';

@Component({
  selector: 'app-estudiantesmaterias',
  templateUrl: './estudiantesmaterias.page.html',
  styleUrls: ['./estudiantesmaterias.page.scss'],
})
export class EstudiantesmateriasPage implements OnInit {
  id: any;
  seleccionado?: Materia;
  public estudiantesMateria?: EstudiantesMateria[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private materiasService: MateriasService,
    private estudiantesMateriasService: EstudiantesMateriaService
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.materiasService
        .getMateriaById(params['id'])
        .subscribe((seleccionado) => (this.seleccionado = seleccionado));
      this.estudiantesMateriasService
        .getEstudiantesByMateria(params['id'])
        .subscribe((estudiantes) => (this.estudiantesMateria = estudiantes));
    });
  }

  back(): void {
    this.router.navigate(['tabs/materias']);
  }
}
