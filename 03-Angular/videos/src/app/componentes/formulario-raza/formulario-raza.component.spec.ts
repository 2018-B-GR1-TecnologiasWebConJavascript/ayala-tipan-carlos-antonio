import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fo } from './formulario-raza.component';

describe('Fo', () => {
  let component: Fo;
  let fixture: ComponentFixture<Fo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fo ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
