import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteEditaComponent } from './cliente-edita.component';

describe('ClienteEditaComponent', () => {
  let component: ClienteEditaComponent;
  let fixture: ComponentFixture<ClienteEditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteEditaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
