import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoServicosComponent } from './info-servicos.component';

describe('InfoServicosComponent', () => {
  let component: InfoServicosComponent;
  let fixture: ComponentFixture<InfoServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoServicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
