import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TertiaryHeadingComponent } from './tertiary-heading.component';

describe('TertiaryHeadingComponent', () => {
  let component: TertiaryHeadingComponent;
  let fixture: ComponentFixture<TertiaryHeadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TertiaryHeadingComponent]
    });
    fixture = TestBed.createComponent(TertiaryHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
