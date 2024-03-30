import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryHeadingComponent } from './primary-heading.component';

describe('PrimaryHeadingComponent', () => {
  let component: PrimaryHeadingComponent;
  let fixture: ComponentFixture<PrimaryHeadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimaryHeadingComponent]
    });
    fixture = TestBed.createComponent(PrimaryHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
