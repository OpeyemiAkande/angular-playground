import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownMenuRadioComponent } from './dropdown-menu-radio.component';

describe('DropdownMenuRadioComponent', () => {
  let component: DropdownMenuRadioComponent;
  let fixture: ComponentFixture<DropdownMenuRadioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownMenuRadioComponent]
    });
    fixture = TestBed.createComponent(DropdownMenuRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
