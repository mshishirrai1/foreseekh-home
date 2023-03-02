import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsPaginationCarouselComponent } from './fs-pagination-carousel.component';

describe('FsPaginationCarouselComponent', () => {
  let component: FsPaginationCarouselComponent;
  let fixture: ComponentFixture<FsPaginationCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsPaginationCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FsPaginationCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
