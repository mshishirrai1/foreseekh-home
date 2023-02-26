import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDescImageComponent } from './text-desc-image.component';

describe('TextDescImageComponent', () => {
  let component: TextDescImageComponent;
  let fixture: ComponentFixture<TextDescImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextDescImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextDescImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
