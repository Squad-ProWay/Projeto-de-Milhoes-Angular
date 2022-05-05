import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroHorarioComponent } from './cadastro-horario.component';

describe('CadastroHorarioComponent', () => {
  let component: CadastroHorarioComponent;
  let fixture: ComponentFixture<CadastroHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroHorarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
