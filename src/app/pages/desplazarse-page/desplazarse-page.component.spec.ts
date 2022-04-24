import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesplazarsePageComponent } from './desplazarse-page.component';

describe('DesplazarsePageComponent', () => {
  let component: DesplazarsePageComponent;
  let fixture: ComponentFixture<DesplazarsePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesplazarsePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesplazarsePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
