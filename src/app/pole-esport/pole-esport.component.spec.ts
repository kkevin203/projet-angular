import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoleEsportComponent } from './pole-esport.component';

describe('PoleEsportComponent', () => {
  let component: PoleEsportComponent;
  let fixture: ComponentFixture<PoleEsportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoleEsportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoleEsportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
