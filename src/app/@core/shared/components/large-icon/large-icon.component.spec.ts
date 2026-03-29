import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeIconComponent } from './large-icon.component';

describe('LargeIconComponent', () => {
  let component: LargeIconComponent;
  let fixture: ComponentFixture<LargeIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LargeIconComponent]
    });
    fixture = TestBed.createComponent(LargeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
