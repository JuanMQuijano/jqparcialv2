import { TestBed } from '@angular/core/testing';

import { EstudiantesMateriaService } from './estudiantes-materia.service';

describe('EstudiantesMateriaService', () => {
  let service: EstudiantesMateriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudiantesMateriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
