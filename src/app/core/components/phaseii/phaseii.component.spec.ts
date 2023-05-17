import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseiiComponent } from './phaseii.component';

describe('PhaseiiComponent', () => {
  let component: PhaseiiComponent;
  let fixture: ComponentFixture<PhaseiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhaseiiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhaseiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
