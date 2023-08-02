import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaDemComponent } from './categoria-dem.component';

describe('CategoriaDemComponent', () => {
  let component: CategoriaDemComponent;
  let fixture: ComponentFixture<CategoriaDemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriaDemComponent]
    });
    fixture = TestBed.createComponent(CategoriaDemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
