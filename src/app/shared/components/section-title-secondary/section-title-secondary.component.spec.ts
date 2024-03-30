import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTitleSecondaryComponent } from './section-title-secondary.component';

describe('SectionTitleSecondaryComponent', () => {
  let component: SectionTitleSecondaryComponent;
  let fixture: ComponentFixture<SectionTitleSecondaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionTitleSecondaryComponent]
    });
    fixture = TestBed.createComponent(SectionTitleSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
