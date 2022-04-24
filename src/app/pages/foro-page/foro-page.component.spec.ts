import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoPageComponent } from './foro-page.component';

describe('ForoPageComponent', () => {
  let component: ForoPageComponent;
  let fixture: ComponentFixture<ForoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
