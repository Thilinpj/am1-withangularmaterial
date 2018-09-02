import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessInstitutesComponent } from './fitness-institutes.component';

describe('FitnessInstitutesComponent', () => {
  let component: FitnessInstitutesComponent;
  let fixture: ComponentFixture<FitnessInstitutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessInstitutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessInstitutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
