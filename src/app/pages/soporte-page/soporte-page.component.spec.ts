import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoportePageComponent } from './soporte-page.component';

describe('SoportePageComponent', () => {
  let component: SoportePageComponent;
  let fixture: ComponentFixture<SoportePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoportePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoportePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
