import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Experiencia } from './experiencia';

describe('Experiencia', () => {
  let component: Experiencia;
  let fixture: ComponentFixture<Experiencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Experiencia],
    }).compileComponents();

    fixture = TestBed.createComponent(Experiencia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
