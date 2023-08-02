import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JerarquiasAptosComponent } from './jerarquias-aptos.component';

describe('JerarquiasAptosComponent', () => {
  let component: JerarquiasAptosComponent;
  let fixture: ComponentFixture<JerarquiasAptosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JerarquiasAptosComponent]
    });
    fixture = TestBed.createComponent(JerarquiasAptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
