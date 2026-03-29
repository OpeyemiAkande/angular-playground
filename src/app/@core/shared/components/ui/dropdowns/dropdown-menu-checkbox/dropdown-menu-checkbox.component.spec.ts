import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownMenuCheckboxComponent } from './dropdown-menu-checkbox.component';

describe('DropdownMenuCheckboxComponent', () => {
  let component: DropdownMenuCheckboxComponent;
  let fixture: ComponentFixture<DropdownMenuCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownMenuCheckboxComponent]
    });
    fixture = TestBed.createComponent(DropdownMenuCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
