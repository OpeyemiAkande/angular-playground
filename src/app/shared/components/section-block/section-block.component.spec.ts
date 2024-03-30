import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlockComponent } from './section-block.component';

describe('SectionBlockComponent', () => {
  let component: SectionBlockComponent;
  let fixture: ComponentFixture<SectionBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionBlockComponent]
    });
    fixture = TestBed.createComponent(SectionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
