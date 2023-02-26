import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDescButtonComponent } from './text-desc-button.component';

describe('TextDescButtonComponent', () => {
  let component: TextDescButtonComponent;
  let fixture: ComponentFixture<TextDescButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextDescButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextDescButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
