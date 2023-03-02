import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsProductsComponent } from './fs-products.component';

describe('FsProductsComponent', () => {
  let component: FsProductsComponent;
  let fixture: ComponentFixture<FsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
