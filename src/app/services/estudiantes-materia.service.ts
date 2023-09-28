import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { EstudiantesMateria } from '../estudiantesMateria';
import { ESTUDIANTESMATERIAS } from '../lista-estudiante';

@Injectable({
  providedIn: 'root',
})
export class EstudiantesMateriaService {
  constructor() {}

  getEstudiantesByMateria(
    id_materia: number
  ): Observable<EstudiantesMateria[] | undefined> {
    id_materia = Number(id_materia);
    return of(ESTUDIANTESMATERIAS.filter((x) => x.id_materia === id_materia));
  }
}
