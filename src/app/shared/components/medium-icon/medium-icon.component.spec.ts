import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumIconComponent } from './medium-icon.component';

describe('MediumIconComponent', () => {
  let component: MediumIconComponent;
  let fixture: ComponentFixture<MediumIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediumIconComponent]
    });
    fixture = TestBed.createComponent(MediumIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
