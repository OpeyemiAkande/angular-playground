import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsBannerComponent } from './achievements-banner.component';

describe('AchievementsBannerComponent', () => {
  let component: AchievementsBannerComponent;
  let fixture: ComponentFixture<AchievementsBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AchievementsBannerComponent]
    });
    fixture = TestBed.createComponent(AchievementsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
