import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TertiaryParagraphComponent } from './tertiary-paragraph.component';

describe('TertiaryParagraphComponent', () => {
  let component: TertiaryParagraphComponent;
  let fixture: ComponentFixture<TertiaryParagraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TertiaryParagraphComponent]
    });
    fixture = TestBed.createComponent(TertiaryParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
