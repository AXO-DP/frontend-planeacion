import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JerarquiasAxoComponent } from './jerarquias-axo.component';

describe('JerarquiasAxoComponent', () => {
  let component: JerarquiasAxoComponent;
  let fixture: ComponentFixture<JerarquiasAxoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JerarquiasAxoComponent]
    });
    fixture = TestBed.createComponent(JerarquiasAxoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
