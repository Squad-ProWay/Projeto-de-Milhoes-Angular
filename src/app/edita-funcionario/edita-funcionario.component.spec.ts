import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaFuncionarioComponent } from './edita-funcionario.component';

describe('EditaFuncionarioComponent', () => {
  let component: EditaFuncionarioComponent;
  let fixture: ComponentFixture<EditaFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
