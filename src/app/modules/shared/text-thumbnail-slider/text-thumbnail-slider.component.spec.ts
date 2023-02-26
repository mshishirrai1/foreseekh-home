import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextThumbnailSliderComponent } from './text-thumbnail-slider.component';

describe('TextThumbnailSliderComponent', () => {
  let component: TextThumbnailSliderComponent;
  let fixture: ComponentFixture<TextThumbnailSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextThumbnailSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextThumbnailSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
