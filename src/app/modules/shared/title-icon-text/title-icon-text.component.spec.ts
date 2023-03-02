import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleIconTextComponent } from './title-icon-text.component';

describe('TitleIconTextComponent', () => {
  let component: TitleIconTextComponent;
  let fixture: ComponentFixture<TitleIconTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleIconTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleIconTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
