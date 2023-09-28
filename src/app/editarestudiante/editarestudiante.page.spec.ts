import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarestudiantePage } from './editarestudiante.page';

describe('EditarestudiantePage', () => {
  let component: EditarestudiantePage;
  let fixture: ComponentFixture<EditarestudiantePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarestudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
