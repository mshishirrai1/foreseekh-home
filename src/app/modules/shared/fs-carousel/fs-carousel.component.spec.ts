import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsCarouselComponent } from './fs-carousel.component';

describe('FsCarouselComponent', () => {
  let component: FsCarouselComponent;
  let fixture: ComponentFixture<FsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
