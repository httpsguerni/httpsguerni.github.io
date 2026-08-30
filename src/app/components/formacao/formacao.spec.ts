import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Formacao } from './formacao';

describe('Formacao', () => {
  let component: Formacao;
  let fixture: ComponentFixture<Formacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formacao],
    }).compileComponents();

    fixture = TestBed.createComponent(Formacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
