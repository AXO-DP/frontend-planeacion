import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsCalculadoraComponent } from './tickets-calculadora.component';

describe('TicketsCalculadoraComponent', () => {
  let component: TicketsCalculadoraComponent;
  let fixture: ComponentFixture<TicketsCalculadoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketsCalculadoraComponent]
    });
    fixture = TestBed.createComponent(TicketsCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
