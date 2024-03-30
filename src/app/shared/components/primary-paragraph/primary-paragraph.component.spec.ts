import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryParagraphComponent } from './primary-paragraph.component';

describe('PrimaryParagraphComponent', () => {
  let component: PrimaryParagraphComponent;
  let fixture: ComponentFixture<PrimaryParagraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimaryParagraphComponent]
    });
    fixture = TestBed.createComponent(PrimaryParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
