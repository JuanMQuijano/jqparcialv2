import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevamateriaPage } from './nuevamateria.page';

describe('NuevamateriaPage', () => {
  let component: NuevamateriaPage;
  let fixture: ComponentFixture<NuevamateriaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevamateriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
