import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioCardComponent } from './servicio-card.component';

describe('ServicioCardComponent', () => {
  let component: ServicioCardComponent;
  let fixture: ComponentFixture<ServicioCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
