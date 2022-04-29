import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaServicoComponent } from './consulta-servico.component';

describe('ConsultaServicoComponent', () => {
  let component: ConsultaServicoComponent;
  let fixture: ComponentFixture<ConsultaServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
