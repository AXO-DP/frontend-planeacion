import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdmMainComponent } from './mdm-main.component';

describe('MdmMainComponent', () => {
  let component: MdmMainComponent;
  let fixture: ComponentFixture<MdmMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdmMainComponent]
    });
    fixture = TestBed.createComponent(MdmMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
