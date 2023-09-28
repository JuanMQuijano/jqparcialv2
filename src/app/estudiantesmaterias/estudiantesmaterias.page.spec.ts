import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstudiantesmateriasPage } from './estudiantesmaterias.page';

describe('EstudiantesmateriasPage', () => {
  let component: EstudiantesmateriasPage;
  let fixture: ComponentFixture<EstudiantesmateriasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EstudiantesmateriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
