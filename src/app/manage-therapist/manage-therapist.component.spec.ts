import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTherapistComponent } from './manage-therapist.component';

describe('ManageTherapistComponent', () => {
  let component: ManageTherapistComponent;
  let fixture: ComponentFixture<ManageTherapistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTherapistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageTherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
