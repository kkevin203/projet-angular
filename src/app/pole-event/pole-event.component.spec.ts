import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoleEventComponent } from './pole-event.component';

describe('PoleEventComponent', () => {
  let component: PoleEventComponent;
  let fixture: ComponentFixture<PoleEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoleEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoleEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
