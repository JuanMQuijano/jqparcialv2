import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Materia } from '../materia';
import { MATERIAS } from '../lista-materias';

@Injectable({
  providedIn: 'root',
})
export class MateriasService {
  constructor() {}

  getMaterias(): Observable<Materia[]> {
    return of(MATERIAS);
  }

  deleteMateria(materia: Materia | number): Observable<Materia[]> {
    const id = typeof materia === 'number' ? materia : materia.id;
    if (id > -1) {
      MATERIAS.splice(id, 1);
    }

    return of(MATERIAS);
  }

  getMateriaById(id: number): Observable<Materia | undefined> {
    id = Number(id);
    return of(MATERIAS.find((x) => x.id === id));
  }

  editMateria(materia: Materia): Observable<Materia | undefined> {
    let id = Number(materia.id);
    let index: number = MATERIAS.findIndex((x) => x.id === id);
    MATERIAS[index] = materia;
    return of(MATERIAS[index]);
  }

  newMateria(materia: Materia): Observable<Materia> {
    MATERIAS.push(materia);
    let index: number = MATERIAS.findIndex((x) => x.id === materia.id);
    return of(MATERIAS[index]);
  }
}
