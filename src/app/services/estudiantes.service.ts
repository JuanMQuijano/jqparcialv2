import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Estudiante } from '../estudiante';
import { ESTUDIANTES } from '../lista-estudiantes';

@Injectable({
  providedIn: 'root',
})
export class EstudiantesService {
  constructor() {}

  getEstudiantes(): Observable<Estudiante[]> {
    return of(ESTUDIANTES);
  }

  deleteEstudiante(estudiante: Estudiante | number): Observable<Estudiante[]> {
    const id = typeof estudiante === 'number' ? estudiante : estudiante.id;
    if (id > -1) {
      ESTUDIANTES.splice(id, 1);
    }

    return of(ESTUDIANTES);
  }

  getEstudianteById(id: number): Observable<Estudiante | undefined> {
    id = Number(id);
    return of(ESTUDIANTES.find((x) => x.id === id));
  }

  editEstudiante(estudiante: Estudiante): Observable<Estudiante | undefined> {
    let id = Number(estudiante.id);
    let index: number = ESTUDIANTES.findIndex((x) => x.id === id);
    ESTUDIANTES[index] = estudiante;
    return of(ESTUDIANTES[index]);
  }

  newEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    ESTUDIANTES.push(estudiante);
    let index: number = ESTUDIANTES.findIndex((x) => x.id === estudiante.id);
    return of(ESTUDIANTES[index]);
  }
}
