import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaHorarioComponent } from './edita-horario.component';

describe('EditaHorarioComponent', () => {
  let component: EditaHorarioComponent;
  let fixture: ComponentFixture<EditaHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaHorarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
